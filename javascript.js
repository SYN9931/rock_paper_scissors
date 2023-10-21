//rock-paper-scissors
let draw =0;
let win=0;
let lose=0;





let play = function (val) {
if ( win <5 && lose<5){
  //get random number between 1,2 or 3 for computer
    let getComputerChoice = (Math.floor(Math.random()*3))+1;
    console.log("randomizer value: " + getComputerChoice);
    //get value from the button that player clicked
    let userSelection = val;
    console.log ("user: " + userSelection);
    

        if (getComputerChoice === 1) {
            const computerSelection = "paper";
            console.log ("computer: " + computerSelection);
            const computerWeapon = document.getElementById("computerWeapon");
            computerWeapon.textContent = "Computer chose Paper."

            if (userSelection == "paper") {
                console.log("both of you picked paper. It's a draw!");
                draw = draw+1;
            } else if (userSelection == "rock") {
                console.log(userSelection + " beaten by " + computerSelection + ". You lose!" );
                lose = lose + 1;
                    if (lose ===5){
                        const result = document.getElementById("result");
                        result.textContent = 'Computer wins!'
                    }
            } else {
                console.log (userSelection + " beats " + computerSelection + ". You won!" );
                win = win + 1;
                    if (win ===5){
                        const result = document.getElementById("result");
                        result.textContent = 'Player wins!'
                    }
                
            }
        } 
        else if (getComputerChoice=== 2) {
            const  computerSelection = "scissors";
            console.log ("computer: " + computerSelection);
            const computerWeapon = document.getElementById("computerWeapon");
            computerWeapon.textContent = "Computer chose Scissors."

            if (userSelection == "scissors") {
                console.log("both of you picked scissors. It's a draw!");
                draw = draw+1;
            } else if (userSelection == "rock") {
                console.log(userSelection + " beats " + computerSelection + ". You won!" );
                win = win + 1;
                    if (win ===5){
                        const result = document.getElementById("result");
                        result.textContent = 'Player wins!'
                    }
            } else {
                console.log (userSelection + " beaten by " + computerSelection + ". You lose!" );
                lose = lose + 1;
                    if (lose === 5){
                        const result = document.getElementById("result");
                        result.textContent = 'Computer wins!'
                    }
            }
        }
        else {
            const  computerSelection = "rock";
            console.log ("computer: " + computerSelection);
            const computerWeapon = document.getElementById("computerWeapon");
            computerWeapon.textContent = "Computer chose Rock."

            if (userSelection == "rock") {
                console.log("both of you picked rock. It's a draw!");
                draw = draw+1;
            } else if (userSelection == "paper") {
                console.log(userSelection + " beats " + computerSelection + ". You won!" );
                win = win + 1;
                    if (win ===5) {
                        const result = document.getElementById("result");
                        result.textContent = 'Player wins!'
                }
                
            } else {
                console.log (userSelection + " beaten by " + computerSelection + ". You lose!" );
                lose = lose + 1;
                    if (lose===5){
                        const result = document.getElementById("result");
                        result.textContent = 'Computer wins!'
                    }
            }
        }

  
    console.log("Draw: " + draw + ". Win: " + win + ". Lose: " + lose + ".");   
    const  winScore = document.getElementById("winScore");
    const loseScore = document.getElementById("loseScore");
    const drawScore = document.getElementById("drawScore");

    
    winScore.textContent = `Player score = ${win}`;
    loseScore.textContent = `Computer score = ${lose}`;
    drawScore.textContent = `Draw = ${draw}`;

    
}
};

