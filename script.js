
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

// function compareChoices() { 
//     let alert = document.createElement("div");
//     let textColor;
//     let nextBtn = document.createElement("button");
//     nextBtn.classList.add("btn-div");
//     nextBtn.textContent = "Next round";
//     nextBtn.addEventListener('click', () => {
//         removeChoiceBtns.forEach(a => {
//             a.style.display = "inline";
//         })
//     })

//     console.log(winningScore);

//     function appendAlert(message) {
//         alert.textContent = message;
//         document.querySelector("#choice-display").style.display = "none";
//         alert.style.color = textColor;
//         document.querySelector(".choices-btn-div").appendChild(alert);
//         setTimeout(() => {
//             document.querySelector(".choices-btn-div").appendChild(nextBtn);
//         }, 1200)
//     }

//     if (userChoice === "Rock") {
//         //User Wins
//         if (cpuChoice === "Scissors") {
//             userScore++;
//             document.getElementById("user-score").textContent = userScore;
//             if (userScore === winningScore) {
//                 /* alert(`You win! Final score: User: ${userScore} CPU: ${cpuScore}`);
//                 keepGoing = false;
//                 return; */
//             } 
//             let message = "You won this round!";
//             textColor = "green";
//             appendAlert(message);
//             /* alert(`You won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
//             return; */
//         }
//         //CPU Wins
//         if (cpuChoice === "Paper") {
//             cpuScore++;
//             if (cpuScore === winningScore) {
//                 alert(`The CPU wins! Final score: User: ${userScore} CPU: ${cpuScore}`);
//                 keepGoing = false;
//                 return;
//             } 
//             alert(`The CPU won this round! Your score: ${userScore}. CPU score: ${cpuScore}.`);
//             return;
//         }
//         //Tie
//         if (cpuChoice === "Rock") {
//             alert(`Tie! Your score: ${userScore}. CPU score: ${cpuScore}.`);
//             return;
//         }
//     };
// }


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
        
        removeChoiceBtns.forEach(a => {
            a.style.display = "none";
        })

        document.getElementById("choice-title").textContent = "";
        document.querySelector("#user-choice").textContent = `You chose: ${userChoice}`;
        document.querySelector("#cpu-choice").textContent = `The computer chose: ${cpuChoice}`;
        document.querySelector("#choice-display").style.display = "block";

        function compareChoices() { 
            let alert = document.createElement("div");
            let textColor;
            let nextBtn = document.createElement("button");
            nextBtn.classList.add("btn-div");
            nextBtn.textContent = "Next round";
            nextBtn.addEventListener('click', () => {
                removeChoiceBtns.forEach(a => {
                    document.getElementById("choice-title").textContent = "Rock, Paper, or Scissors?";
                    a.style.display = "inline";
                    alert.remove();
                    nextBtn.remove();
                })
            })

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

        setTimeout(() => {
            compareChoices();
        }, 1200);
    }

}













