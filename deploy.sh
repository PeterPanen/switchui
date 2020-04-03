#!/bin/bash

# Pull newest source
git pull

# Get current running container version
current_version=`docker ps --filter name=switchui --format {{.Image}} | cut -d ":" -f2`

# Get package.json version
pkg_version=`bash version.sh`


if [ $current_version = $pkg_version ]
then
  echo "Version $pkg_version already exists"
  echo "Deployment aborted"
else
  echo "------ Deployment started ------"
  docker build -t panen/switchui:$pkg_version .
  docker stop switchui
  docker rm switchui
  docker run -e BUILD_NUMBER=$pkg_version --name switchui -d panen/switchui:$pkg_version  
fi
