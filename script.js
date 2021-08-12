
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
        cpuChoice = "Scissors" /* getCpuChoice()*/;
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
            const winMessage = document.createElement("div");

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
                winMessage.remove();

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

            function endGameDisplay() {
                setTimeout(() => {
                    location.reload();
                    }, timing)
                
                // winMessage.textContent = message;
                // winMessage.style.color = textColor;
                // gameDisplay.appendChild(winMessage);
                // return gameDisplay.appendChild(newGameButton);
                
                // setTimeout(() => {
                //     return gameDisplay.appendChild(newGameButton);
                // }, timing)
            }

            if (userChoice === "Rock") {
                //User Wins
                if (cpuChoice === "Scissors") {
                    userScore++;
                    document.getElementById("user-score").textContent = userScore;

                    if (userScore === winningScore) {
                        message = "You won the game!";
                        textColor = "green";
                        winMessage.textContent = message;
                        winMessage.style.color = textColor;
                        gameDisplay.appendChild(winMessage);
                        return endGameDisplay();
                    } 

                    message = "You won this round!";
                    textColor = "green";
                    return appendAlert();
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

        setTimeout(() => {
            compareChoices();
        }, timing);
    }

}













