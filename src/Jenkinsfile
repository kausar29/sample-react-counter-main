pipeline {
    agent any

    tools {
        nodejs 'nodebuilder' // Match the name set in Jenkins Global Tools
    }

    environment {
        DEPLOY_PATH = "/var/www/html"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/MdRasel0/sample-react-counter.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Automated Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh """
                    sudo rm -rf ${DEPLOY_PATH}/*
                    sudo cp -r build/* ${DEPLOY_PATH}/
                """
            }
        }

        stage('Reload Nginx') {
            steps {
                sh 'sudo systemctl reload nginx'
            }
        }
    }

    post {
        success {
            echo "✅ React app deployed successfully!"
        }
        failure {
            echo "❌ Build or deploy failed!"
        }
    }
}
