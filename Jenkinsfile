pipeline {
    agent {
        docker {
            image 'node:20-alpine'
        }
    }

    stages {
        stage('Install') {
            steps {
                dir('backend'){
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('backend'){
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir('backend'){
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying..."'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}