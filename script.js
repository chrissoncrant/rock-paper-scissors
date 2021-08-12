
//Variables:
let userScore = 0;

let cpuScore = 0;

let userChoice;

let cpuChoice;

let winningScore;

const timing = 800;

const setWinningScoreDiv = document.querySelector(".winningScore-div");

const gameDisplay = document.querySelector(".game-display");

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

//Start Button:
const startButton = document.querySelector("#start-btn");
const startButtonDiv = document.querySelector(".start-btn-div");

startButton.addEventListener('click', loadWinningScoreChoice);

function loadWinningScoreChoice() {                
    startButtonDiv.style.display = "none";
    setWinningScoreDiv.style.display = "block";
}

//Set Winning Score and Start Game:
let scoreOptions = document.querySelectorAll('.scoreOptions');

scoreOptions.forEach(trigger => {
   trigger.addEventListener('click', startGame);
})

function startGame() {
    winningScore = this.textContent * 1;

    setWinningScoreDiv.style.display = "none";
    gameDisplay.style.display = "block";

    //Attach getChoices Function to choice buttons:
    let choiceButtons = document.querySelectorAll('.choice-btn');

    choiceButtons.forEach(trigger => {
        trigger.addEventListener('click', getChoices);
    })

    function getChoices() {
        cpuChoice = getCpuChoice();
        userChoice = this.textContent;

        //Remove choice buttons and title:
        let removeChoiceBtns = document.querySelectorAll(".choice-btn");
        removeChoiceBtns.forEach(a => {
            a.style.display = "none";
        })
        document.getElementById("choice-title").textContent = "";
        
        //Display the choices for computer and user:
        document.querySelector("#user-choice").textContent = `You chose: ${userChoice}`;
        document.querySelector("#cpu-choice").textContent = `The computer chose: ${cpuChoice}`;
        document.querySelector("#choice-display").style.display = "block";

        function compareChoices() { 
            const alertDiv = document.createElement("div");
            let message;
            let textColor;
            const nextRoundButton = document.createElement("button");
            const newGameButton = document.createElement("button");
            const endGameMessage = document.createElement("div");

            //Creation of Next Round Button:
            nextRoundButton.classList.add("btn-div");
            nextRoundButton.textContent = "Next round";
            nextRoundButton.addEventListener('click', () => {
                
                nextRoundButton.remove();
                
                alertDiv.style.display = "none";

                document.querySelector("#choice-display").style.display = "none";

                document.getElementById("choice-title").textContent = "Rock, Paper, or Scissors?";

                removeChoiceBtns.forEach(a => {
                    a.style.display = "inline";
                })   
            })

            //Creation of newGameButton:
            newGameButton.classList.add("btn-div");
            newGameButton.textContent = "New Game";
            newGameButton.addEventListener('click', () => {
                newGameButton.remove();
                endGameMessage.remove();

                //Remove and zero out game display:
                gameDisplay.style.display = "none";
                userScore = 0;
                cpuScore = 0;

                document.getElementById("user-score").textContent = userScore;
                document.getElementById("cpu-score").textContent = cpuScore;
                
                document.querySelector("#choice-display").style.display = "none";
                removeChoiceBtns.forEach(a => {
                    a.style.display = "inline";
                })

                startButtonDiv.style.display = "block";
            })

            function appendAlert() {
                alertDiv.textContent = message;
                alertDiv.style.color = textColor;
                gameDisplay.appendChild(alertDiv);
                
                setTimeout(() => {
                    gameDisplay.appendChild(nextRoundButton);
                }, timing)
            }

            function endGame() {
                setTimeout(() => {
                    location.reload();
                    }, 2000)
            }

            if (userChoice === "Rock") {
                //User Wins
                if (cpuChoice === "Scissors") {
                    userScore++;
                    document.getElementById("user-score").textContent = userScore;

                    if (userScore === winningScore) {
                        message = "You won the game!";
                        textColor = "green";
                        endGameMessage.textContent = message;
                        endGameMessage.style.color = textColor;
                        gameDisplay.appendChild(endGameMessage);
                        return endGame();
                    } 

                    message = "You won this round!";
                    textColor = "green";
                    return appendAlert();
                   
                }
                //CPU Wins
                if (cpuChoice === "Paper") {
                    cpuScore++;
                    document.getElementById("cpu-score").textContent = cpuScore;
                    if (cpuScore === winningScore) {
                        message = "You lost the game!";
                        textColor = "red";
                        endGameMessage.textContent = message;
                        endGameMessage.style.color = textColor;
                        gameDisplay.appendChild(endGameMessage);
                        return endGame();
                    } 
                    message = "You lost this round!";
                    textColor = "red";
                    return appendAlert();
                }
                //Tie
                if (cpuChoice === "Rock") {
                    message = "Tie!";
                    textColor = "orange";
                    return appendAlert();
                }
            };

            if (userChoice === "Paper") {
                //User Wins
                if (cpuChoice === "Rock") {
                    userScore++;
                    document.getElementById("user-score").textContent = userScore;

                    if (userScore === winningScore) {
                        message = "You won the game!";
                        textColor = "green";
                        endGameMessage.textContent = message;
                        endGameMessage.style.color = textColor;
                        gameDisplay.appendChild(endGameMessage);
                        return endGame();
                    } 

                    message = "You won this round!";
                    textColor = "green";
                    return appendAlert();
                   
                }
                //CPU Wins
                if (cpuChoice === "Scissors") {
                    cpuScore++;
                    document.getElementById("cpu-score").textContent = cpuScore;
                    if (cpuScore === winningScore) {
                        message = "You lost the game!";
                        textColor = "red";
                        endGameMessage.textContent = message;
                        endGameMessage.style.color = textColor;
                        gameDisplay.appendChild(endGameMessage);
                        return endGame();
                    } 
                    message = "You lost this round!";
                    textColor = "red";
                    return appendAlert();
                }
                //Tie
                if (cpuChoice === "Paper") {
                    message = "Tie!";
                    textColor = "orange";
                    return appendAlert();
                }
            };

            if (userChoice === "Scissors") {
                //User Wins
                if (cpuChoice === "Paper") {
                    userScore++;
                    document.getElementById("user-score").textContent = userScore;

                    if (userScore === winningScore) {
                        message = "You won the game!";
                        textColor = "green";
                        endGameMessage.textContent = message;
                        endGameMessage.style.color = textColor;
                        gameDisplay.appendChild(endGameMessage);
                        return endGame();
                    } 

                    message = "You won this round!";
                    textColor = "green";
                    return appendAlert();
                   
                }
                //CPU Wins
                if (cpuChoice === "Rock") {
                    cpuScore++;
                    document.getElementById("cpu-score").textContent = cpuScore;
                    if (cpuScore === winningScore) {
                        message = "You lost the game!";
                        textColor = "red";
                        endGameMessage.textContent = message;
                        endGameMessage.style.color = textColor;
                        gameDisplay.appendChild(endGameMessage);
                        return endGame();
                    } 
                    message = "You lost this round!";
                    textColor = "red";
                    return appendAlert();
                }
                //Tie
                if (cpuChoice === "Scissors") {
                    message = "Tie!";
                    textColor = "orange";
                    return appendAlert();
                }
            };
         }

        setTimeout(() => {
            compareChoices();
        }, timing);
    }

}













