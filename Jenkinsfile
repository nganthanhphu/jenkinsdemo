pipeline {
    agent {
        docker {
            image 'node:20-alpine'
        }
    }

    stages {
        stage('Install') {
            dir('backend') {
                steps {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            dir('backend') {
                steps {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            dir('backend') {
                steps {
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