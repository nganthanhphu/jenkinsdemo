pipeline {
    agent any

    triggers {
        pollSCM('H/1 * * * *')
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
    }

    stages {
        stage('Checkout'){
            steps {
                checkout scm
            }
        }

        stage('Install and lint and build'){
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            steps {
                sh 'node -v && npm -v'
                sh 'npm ci'
                sh 'npm run lint'
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'dist/**/*', fingerprint: true, allowEmptyArchive: false
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}