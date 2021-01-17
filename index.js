var readlineSync = require('readline-sync')

const chalk = require('chalk');


var score =0;

var highscore = [
  {
  name :"Chaitanya",
  score:"5"
  },
  {
  name :"Rahul",
  score:"4"
  }]




console.log(chalk.bgYellow("WELCOME TO CRICKET QUIZ!\n"));


var username = readlineSync.question("What's Your Name?\n")

console.log(chalk.blackBright.bgWhiteBright("Hello, ")+ chalk.bgWhiteBright.black(username.toUpperCase()+"! "))


if(readlineSync.keyInYN('Do you want to Play the Quiz?'))
{
  console.log(chalk.red.bgWhite("\nThere Will Be Total Five Questions\nYou Have To Choose Any 1 Correct Answer From The 4 Given Options For Every Question\n" ))
  console.log("RULES :\n" +
  chalk.red.bgWhite("+1 For Every Correct Answer\n")  +chalk.red.bgWhite("-1 For Every Wrong Answer"))
  
  console.log(chalk.bgYellow("\nOK, Now Let's Get Started\n"))

  

//Question set

var questions =[{
  question:chalk.cyanBright("Total Players In One Team\n") + chalk.blueBright(("A. 11 \n") +("B. 12\n") +("C. 15\n") +("D. 10\n")),
  answer : "a"
}, 
{
  question:chalk.cyanBright("Captain Of Indian ODI Cricket Team\n")
  + chalk.blueBright(("A. Dhoni \n") +("B. Virat\n") +("C. Rohit\n") +("D. Rahane\n")),
  answer : "b"
},
{
   question:chalk.cyanBright("Which Team Won ODI World Cup 2011?\n")
   +chalk.blueBright(("A. Sri Lanka\n") +("B. England\n") +("C. Australia\n") +("D. India\n"))
  ,answer : "d"
},
{
  question:chalk.cyanBright("Who Is The first Batsman To Cross 10000 Runs In Tests\n")+ chalk.blueBright(("A. Sunil Gavaskar\n") +("B. Virat Kolhi\n") +("C. Sachin Tendulkar\n") +("D. Ricky Pointing\n"))
  ,answer:"a"
},
{
  question:chalk.cyanBright("Which Country Has Played The Maximum Number Of One Day Matches?\n")
  +chalk.blueBright(("A. Australia\n") +("B. India\n") +("C. West Indies\n") +("D. England\n")),
  answer:"a"
}
];


//Loop 

for(var i=0;i<questions.length;i++)
{
  var currentques = questions[i];
  
  play(currentques.question ,currentques.answer);
}


//Final Statements

console.log(chalk.underline("Yay! Your Final  Score Is : ") + chalk.bgMagenta(score))

console.log("-----------------------------");

console.log(chalk.underline("TOP SCORERS"));

for(var i=0;i<highscore.length;i++)
{
  console.log(highscore[i]);
}

console.log("-----------------------------");

console.log("If Your Score Is Higher Then The Top Scorers Then Just DM Me On LinkedIn @ChaitanyaTekane")

console.log("-----------------------------");


console.log(chalk.bold("Thank You For Playing This Quiz!"));



}
else
{
  console.log("Thank You For Being Here,Have A Good Day!")
  console.log("-----------------------------")
}




function play(question ,answer){

  var userAnswer = readlineSync.question(chalk.bold(question));


  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.bgGreenBright("Right Answer!"));
    score+=1;
    }
  else{
    console.log(chalk.bgRedBright("Wrong Answer!"));
    console.log(chalk.bgGreenBright("Correct Option is : ")+answer.toUpperCase())
    score-=1;
  }

  console.log("Current Score is: ",score)
  console.log("-------------")
  
}
