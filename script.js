//Original Game Function:
/*
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
*/

//Variables:
let userScore = 0;

let cpuScore = 0;

let userChoice;

let cpuChoice;

let winningScore;



//Independent Functions
function getCpuChoice() {
    let a = Math.floor(Math.random() * 3);
    switch (a)  {
        case 0: 
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    };
}

/*
function getWinningScore() {
    let winningScore = prompt("What will the winning score be?");
    if (winningScore === null) {return};
    if (winningScore === null || winningScore === undefined || !(winningScore.match(/[0-9]/))) {
        console.log(winningScore);
        alert("Please enter a number!")
        return getWinningScore();
    }
    return parseInt(winningScore);
}
*/

/*
function getUserChoice() {
    let choice = prompt("rock, paper, or scissors?");
    if (choice === null) throw("");
    choice = choice.toLowerCase();
    if (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        alert("Please choose either rock, paper or scissors!");
        return getUserChoice();
    }
    return choice;
}
*/

//ORIGINAL COMPARECHOICES FUNCTION WITHOUT UI:
/* function compareChoices() { 
    userChoice = getUserChoice();
    cpuChoice = getCpuChoice();
    alert(`Computer chose ${cpuChoice}`);
    if (userChoice === "rock") {
        //User Wins
        if (cpuChoice === "Scissors") {
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
        if (cpuChoice === "Paper") {
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
        if (cpuChoice === "Rock") {
            alert(`Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`);
            return;
        }
    };
    if (userChoice === "paper") {
        //User Wins
        if (cpuChoice === "Rock") {
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
        if (cpuChoice === "Scissors") {
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
        if (cpuChoice === "Paper") {
            alert(`Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`);
            return;
        }
    };
    if (userChoice === "scissors") {
        //User Wins
        if (cpuChoice === "Paper") {
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
        if (cpuChoice === "Rock") {
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
        if (cpuChoice === "Scissors") {
            alert(`Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`);
            return;
        }
    };
} */

//NEW COMPARECHOICES WITH UI FUNCTIONALITY:
function compareChoices() { 
    let alert = document.createElement("div");
    let textColor;
    let nextBtn = document.createElement("button");
    nextBtn.classList.add("btn-div");
    nextBtn.textContent = "Next round";
    console.log(winningScore);

    function appendAlert(message) {
        alert.textContent = message;
        document.querySelector("#choice-display").style.display = "none";
        alert.style.color = textColor;
        document.querySelector(".choices-btn-div").appendChild(alert);
        setTimeout(() => {
            document.querySelector(".choices-btn-div").appendChild(nextBtn);
        }, 1200)
    }

    if (userChoice === "Rock") {
        //User Wins
        if (cpuChoice === "Scissors") {
            userScore++;
            document.getElementById("user-score").textContent = userScore;
            if (userScore === winningScore) {
                /* alert(`You win! Final score: User: ${userScore} CPU: ${cpuScore}`);
                keepGoing = false;
                return; */
            } 
            let message = "You won this round!";
            textColor = "green";
            appendAlert(message);
            /* alert(`You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
            return; */
        }
        //CPU Wins
        if (cpuChoice === "Paper") {
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
        if (cpuChoice === "Rock") {
            alert(`Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`);
            return;
        }
    };
}


//Variable Declaration:
/*
let userScore = 0;

let cpuScore = 0;

let winningScore = 1; //getWinningScore();

let userChoice = "rock" //getUserChoice();

let cpuChoice = "scissors"; //getCpuChoice();

let keepGoing = true;
*/


//Start Button:
let startButton = document.querySelector("#start-btn");

startButton.addEventListener('click', startGame);

function startGame() {    
    document.querySelector(".start-btn-div").remove();
    document.querySelector(".winningScore-div").style.display = "block";
}

//Set Winning Score:
let scoreOptions = document.querySelectorAll('.scoreOptions');

scoreOptions.forEach(trigger => {
   trigger.addEventListener('click', moveToUserChoice);
})

function moveToUserChoice() {
    winningScore = this.textContent * 1;
    // console.log(winningScore);
    // console.log(this);
    document.querySelector(".winningScore-div").remove();
    document.querySelector(".choices-btn-div").style.display = "block";
    document.querySelector(".scoreboard").style.display = "block";

    let choiceButtons = document.querySelectorAll('.choice-btn');

    choiceButtons.forEach(trigger => {
        trigger.addEventListener('click', getChoices);
    })

    function getChoices() {
        cpuChoice = "Scissors" /* getCpuChoice()*/;
        userChoice = this.textContent;

        let removeChoiceBtns = document.querySelectorAll(".choice-btn");
        
        removeChoiceBtns.forEach(training => {
            training.remove();
        })

        document.getElementById("choice-title").textContent = "";
        document.querySelector("#user-choice").textContent = `You chose: ${userChoice}`;
        document.querySelector("#cpu-choice").textContent = `The computer chose: ${cpuChoice}`;
        document.querySelector("#choice-display").style.display = "block";

        setTimeout(() => {
            compareChoices();
        }, 1200);
    }

}

//User Choice:
/*
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');
*/


















