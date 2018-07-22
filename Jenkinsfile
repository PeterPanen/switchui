pipeline {
  agent any
  stages {
    stage('Preparing') {
      steps {
        git credentialsId: 'bf3b58cd-78ae-454e-a60d-487005bb4ccb', url: 'https://gitlab.com/rasmuspriv/switchui.git'
      }
    }
    stage('Building') {
      steps {
        sh "docker build -t panen/switch:$BUILD_NUMBER ."
      }
    }
    stage('Stopping') {
      steps {
        sh "docker stop switch || true"
        sh "docker rm switch || true"
      }
    }
    stage('Starting') {
      steps {
        sh "docker run -e BUILD_NUMBER=$BUILD_NUMBER --name switch -d panen/switch:$BUILD_NUMBER"
      }
    }
  }
}
