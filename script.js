//Independent Functions
function getCpuChoice() {
    let a = Math.floor(Math.random() * 3);
    switch (a)  {
        case 0: 
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getWinningScore() {
    let winningScore = prompt("What will the winning score be?");
    if (winningScore === null || winningScore === undefined || !(winningScore.match(/[0-9]/))) {
        alert("Please enter a number!")
        return getWinningScore();
    }
    return parseInt(winningScore);
}

function test() {
    nothing = 5;
}


function getUserChoice() {
    let choice = prompt("rock, paper, or scissors?");
    if (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        console.log("Please choose either rock, paper or scissors!");
        //return getUserChoice();
    }
    return choice;
}

//Variable Declaration:
let userScore = 0;

let cpuScore = 0;

let winningScore = 3; //getWinningScore();

let userChoice = "rock" //getUserChoice();

let cpuChoice = "rock"; //getCpuChoice();

let keepGoing = true;



function compareChoices() { 
    
    if (userChoice === "rock") {
        if (cpuChoice === "scissors") {
            userScore++;
            console.log(userScore);
            if (userScore === winningScore) {
                console.log(`You win! Final score: User: ${userScore} CPU: ${cpuScore}`); 
            } 
            return `You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
        if (cpuChoice === "paper") {
            cpuScore++;
            if (cpuScore === winningScore) {
                console.log(`The CPU wins! Final score: User: ${userScore} CPU: ${cpuScore}`);
            } 
            console.log(`The CPU won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
        }
        if (cpuChoice === "rock") {
            console.log(`Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`);
        }
    };
}

compareChoices();



