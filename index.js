const randomWords = require('random-words');
const inquirer = require('inquirer');
const ranArray = randomWords(5);
const ranNum = Math.floor(Math.random()*5);
const dashWord = ranArray[ranNum].replace(/[a-z]/ig, "-");
const realWord = ranArray[ranNum];

function start() {
    console.log(`Your random word is ${dashWord}`);
    console.log(`Your random word is ${realWord}`);

    function promptWord(){

    inquirer
      .prompt({
        name: "guess",
        type: "input",
        message: "guess a single letter between a and z",
        
      })
      .then(function(answer) {
        console.log(`You guessed ${answer.guess}`)
        let realArr = realWord.split("");
        
        for(i=0;i<realArr.length;i++){
            if(realArr[i]===answer.guess){
                console.log(answer.guess)
            } else {
                console.log("-")
            }
            
        }
        promptWord();
       
        
      });
    } 
    promptWord();  
  }
  start();