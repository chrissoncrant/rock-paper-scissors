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

let cpuChoice = "rock";

let userChoice = "scissors";

let winningScore = 3;

let userScore = 0;

let cpuScore = 0;

function compareChoices() {
    if (userChoice === "rock") {
        if (cpuChoice === "scissors") {
            userScore++;
            if (userScore === winningScore) {
                return `You win! Final score: User: ${userScore} CPU: ${cpuScore}`;
            } 
            return `You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
        if (cpuChoice === "paper") {
            cpuScore++;
            if (cpuScore === winningScore) {
                return `The CPU wins! Final score: User: ${userScore} CPU: ${cpuScore}`;
            } 
            return `The CPU won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
        if (cpuChoice === "rock") {
            return `Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
    };
    if (userChoice === "paper") {
        if (cpuChoice === "rock") {
            userScore++;
            if (userScore === winningScore) {
                return `You win! Final score: User: ${userScore} CPU: ${cpuScore}`;
            } 
            return `You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
        if (cpuChoice === "scissors") {
            cpuScore++;
            if (cpuScore === winningScore) {
                return `The CPU wins! Final score: User: ${userScore} CPU: ${cpuScore}`;
            } 
            return `The CPU won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
        if (cpuChoice === "paper") {
            return `Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
    };
    if (userChoice === "scissors") {
        if (cpuChoice === "paper") {
            userScore++;
            if (userScore === winningScore) {
                return `You win! Final score: User: ${userScore} CPU: ${cpuScore}`;
            } 
            return `You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
        if (cpuChoice === "rock") {
            cpuScore++;
            if (cpuScore === winningScore) {
                return `The CPU wins! Final score: User: ${userScore} CPU: ${cpuScore}`;
            } 
            return `The CPU won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
        if (cpuChoice === "scissors") {
            return `Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`;
        }
    };
}

console.log(compareChoices())

console.log(compareChoices())

console.log(compareChoices())

