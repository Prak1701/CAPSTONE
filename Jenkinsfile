pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Prak1701/CAPSTONE.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('user interface') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('user interface') {
                    sh 'npm run build'
                }
            }
        }

        stage('Start Backend') {
            steps {
                dir('backend') {
                    sh 'npm start &'
                }
            }
        }
    }
}
