#!/bin/bash

# Pull newest source
git pull

# Get current running container version
current_version=`docker ps --filter name=switch --format {{.Image}} | cut -d ":" -f2`

# Get package.json version
pkg_version=`bash version.sh`


if [ $current_version = $pkg_version ]
then
  echo "Version $pkg_version already exists"
  echo "Deployment aborted"
else
  echo "------ Deployment started ------"
  docker build -t panen/switch:$pkg_version .
  docker stop switch
  docker rm switch
  docker run -e BUILD_NUMBER=$pkg_version --name switch -d panen/switch:$pkg_version  
fi
