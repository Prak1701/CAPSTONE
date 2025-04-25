pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('detect/backend') {
                    echo 'Installing backend dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('user interface') {
                    echo 'Installing frontend dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('user interface') {
                    echo 'Building React frontend...'
                    sh 'npm run build'
                }
            }
        }

        stage('Run Backend') {
            steps {
                dir('detect/backend') {
                    echo 'Running backend server...'
                    sh 'npm start &'
                }
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline completed successfully.'
        }
        failure {
            echo '❌ Pipeline execution failed.'
        }
    }
}
