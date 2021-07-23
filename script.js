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

function getUserChoice() {
    let choice = prompt("rock, paper, or scissors?");
    choice = choice.toLowerCase();
    if (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        alert("Please choose either rock, paper or scissors!");
        return getUserChoice();
    }
    return choice;
}

/*
function compareChoices() { 
    if (userChoice === "rock") {
        if (cpuChoice === "scissors") {
            userScore++;
            if (userScore === winningScore) {
                console.log(`You win! Final score: User: ${userScore} CPU: ${cpuScore}`);
            } 
            console.log(`You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
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
*/

//Variable Declaration:
/*
let userScore = 0;

let cpuScore = 0;

let winningScore = 1; //getWinningScore();

let userChoice = "rock" //getUserChoice();

let cpuChoice = "scissors"; //getCpuChoice();

let keepGoing = true;
*/


function game() {
    let userScore = 0;

    let cpuScore = 0;

    let winningScore = getWinningScore();

    let userChoice;

    let cpuChoice;

    let keepGoing = true;

    function compareChoices() { 
        userChoice = getUserChoice();
        cpuChoice = getCpuChoice();
        alert(`Computer chose ${cpuChoice}`);
        if (userChoice === "rock") {
            //User Wins
            if (cpuChoice === "scissors") {
                userScore++;
                if (userScore === winningScore) {
                    alert(`You win! Final score: User: ${userScore} CPU: ${cpuScore}`);
                    keepGoing = false;
                    return;
                } 
                alert(`You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
                return;
            }
            //CPU Wins
            if (cpuChoice === "paper") {
                cpuScore++;
                if (cpuScore === winningScore) {
                    alert(`The CPU wins! Final score: User: ${userScore} CPU: ${cpuScore}`);
                    keepGoing = false;
                    return;
                } 
                alert(`The CPU won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
                return;
            }
            //Tie
            if (cpuChoice === "rock") {
                alert(`Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`);
                return;
            }
        };
        if (userChoice === "paper") {
            //User Wins
            if (cpuChoice === "rock") {
                userScore++;
                if (userScore === winningScore) {
                    alert(`You win! Final score: User: ${userScore} CPU: ${cpuScore}`);
                    keepGoing = false;
                    return;
                } 
                alert(`You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
                return;
            }
            //CPU Wins
            if (cpuChoice === "scissors") {
                cpuScore++;
                if (cpuScore === winningScore) {
                    alert(`The CPU wins! Final score: User: ${userScore} CPU: ${cpuScore}`);
                    keepGoing = false;
                    return;
                } 
                alert(`The CPU won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
                return;
            }
            //Tie
            if (cpuChoice === "paper") {
                alert(`Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`);
                return;
            }
        };
        if (userChoice === "scissors") {
            //User Wins
            if (cpuChoice === "paper") {
                userScore++;
                if (userScore === winningScore) {
                    alert(`You win! Final score: User: ${userScore} CPU: ${cpuScore}`);
                    keepGoing = false;
                    return;
                } 
                alert(`You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
                return;
            }
            //CPU Wins
            if (cpuChoice === "rock") {
                cpuScore++;
                if (cpuScore === winningScore) {
                    alert(`The CPU wins! Final score: User: ${userScore} CPU: ${cpuScore}`);
                    keepGoing = false;
                    return;
                } 
                alert(`The CPU won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
                return;
            }
            //Tie
            if (cpuChoice === "scissors") {
                alert(`Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`);
                return;
            }
        };

    }

    while(keepGoing) {
        compareChoices();
    }
}

let button = document.getElementsByTagName("button");

function playGame() {
    button.onclick = game();
}

















