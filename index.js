var chalk = require("chalk");
var score = 0;
var readlineSync = require("readline-sync");
console.log(chalk.bold.blue("------So Here We Start Our Quiz about PUBG,YOO!------\n"));
var userName = readlineSync.question(chalk.yellow("What's Your Name ? "))
console.log(chalk.bold.red("Hey! ") + chalk.green(userName) + chalk.red(" Welcome to PUBG Game QUIZ"));

function play(question, answer) {
    var userAns = readlineSync.question(question);
    if (userAns === answer) {
        console.log(chalk.green("Correct! Answer"));
        score = score + 1;
    }
    else {
        console.log(chalk.bold.red("Wrong! Answer"));
    }
    console.log(chalk.yellow("Yoo, Your current score is: "), score);
}
var highscore = {
    name: "Prashant kumar",
    score: "4"
}
var questions = [{
    question: `
1.WHEN WAS THE GAME FIRST RELEASED? ,
a-June 20 2016
b-December 20 2017
c-December 20 2016
d-January 20 2018
Enter the Option-->
`,
    answer: "b"
},
{
    question: `
2.WHAT KIND OF GENRE IS PUBG?
a-Adventure
b-Puzzle
c-Combat
d-Battle Royale
Enter the Option-->
`,
    answer: "d"
},
{
    question: `
3.WHAT IS THE RED ZONE?
a-a hidden and safe area
b-an area where bombs can randomly drop
c-a special place where your HP automatically refills
d-an area that allows you to teleport anywhere
Enter the Option-->
`,
    answer: "b"
}, {
    question: `
4.WHAT’S THE MAXIMUM NUMBER OF PLAYERS THAT CAN PARTICIPATE IN A MATCH?
a-50
b-100
c-150
d-200
Enter the Option-->
`,
    answer: "b"
}, {
    question: `
5.WHAT’S THE CAPACITY OF A LEVEL 3 BACKPACK?
a-200
b-220
c-270
d-320
Enter the Option-->
`,
    answer: "c"
}];
for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
}
if (score > highscore.score) {
    console.log(chalk.bold.Cyan("Wow! You scored Highest score now ") + chalk.green(userName) + chalk.bold.cyan("Send me your screenshot of score,I will update the highscore."));
}
else {
    console.log(chalk.bgRed
        ("Highest score is : ") + chalk.green(highscore.score) + chalk.bgRed(" And highest scorer is : ") + chalk.bgGreen(highscore.name));
    console.log(chalk.bgCyan("YOUR final Score: "), score);
}
console.log(chalk.italic.magenta("Thanks ") + chalk.bold.green(userName) + chalk.italic.magenta(" For Playing this Quiz.."));
