pipeline{
    agent any
    stages{
        stage('pull git code'){
            steps{
                git branch: 'main', url:'https://github.com/ashishdabas999999/todoapp'
            }
        }
        // stage('build'){
        //     steps{
        //         echo 'building prject'       
        //     }
        // }  
        stage('test'){
            steps{
                script{
                    msg= 'this is test using script'
                    echo msg
                }
            }
        }
        stage('condition checking'){
            script{
                sh 'docker ps'
                def output = sh(script:'docker ps -a -q',returnStdout:true).trim().toInteger()
                if(output){
                    echo 'THIS IS OUTPUT ${output}'
                }else {
                    echo "no output"
                }
            }
        }
    }
}

//asd