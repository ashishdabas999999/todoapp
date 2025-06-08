pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/ashishdabas999999/todoapp', credentialsId: 'gitub-access-token'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage defined here'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment stage defined here'
            }
        }
    }
}

//hkj