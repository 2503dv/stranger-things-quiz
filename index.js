var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question(chalk.bgRed("what's your name ? \n"));

console.log(chalk.hex('#03bedb').bold("hello "+userName+"😃 \nHope so you are fine ! 😇\nlet's start the quiz ..."));
 console.log("\n");
var score = 0;

function quiz(questionQuiz,answerQuiz){
 var userAnswer = readlineSync.question(chalk.bgRed(questionQuiz));

 if(userAnswer.toUpperCase() === answerQuiz.toUpperCase()){
   console.log(chalk.bgGray.hex('#03bedb').bold('right ! 😁'));
   score = score + 2;
   console.log(chalk.yellow("your current score : "+ score+" 😎"));
   console.log("------------------------");
   if(score===4){
     console.log(chalk.bgWhite.black("\n\n you unlocked level 1 ! congrats 🥳 🥳\n\n"));
    
   }
   if(score===8){
      console.log(chalk.bgWhite.black("\n\n you unlocked level 2 ! congrats 🥳 🥳\n\n"));
   }
 }
 else{
    console.log(chalk.bgGray.hex('#03bedb').bold('Wrong ! 😟'));
   console.log(chalk.yellow("your current score : "+ score+" 😌"));
  
   var want = readlineSync.question("want to know the answer ?  y/n 🙂 \n");
   if(want === "y"){
     console.log(chalk.bgGray.hex('#03bedb').bold(answerQuiz));
      console.log("------------------------");
   }
 }
}


var questions = [
  {
    question : "which one of these appeared in all of the episodes ? \n",
    answer : "Jim Hopper",
  },
  {
    question : "Who was wearing Michael Myers mask on Halloween ? \n",
    answer : "max",
  },
  {
    question : "Where was the first place Eleven went after escape ?\n",
    answer : "benny's burger",
  },
  {
    question : "Who was chester ? \n",
    answer : "will's dog",
  },
  {
    question : "will and Dustin race homme from Mike's in Episode 1. what comic does will want from dustin after winning the race ? \n",
    answer : "x-men #134",
  }
];

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}
console.log(chalk.yellow("your final score is ",score));
console.log("\n");
console.log(chalk.bgRed(" High score "));
console.log("\n");
var highscore = [
  {
    name: "dhruvi",
    scorer: "10",
  },
  {
    name: "mamta",
    scorer: "9",
  }
]
for(var j=0;j<highscore.length;j++)
{
  var curretscorer = highscore[j];
  console.log("Name : ",chalk.bgGray.hex('#03bedb').bold(curretscorer.name));
  console.log("Score : ",chalk.bgGray.hex('#03bedb').bold(curretscorer.scorer));
  console.log("-----------")
}