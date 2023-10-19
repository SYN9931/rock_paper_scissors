//rock-paper-scissors
let draw =0;
let win=0;
let lose=0;





let play = function (val) {
if ( win <5 && lose<5){
  //  console.log ("------Round " + i + "------");
    let getComputerChoice = Math.floor(Math.random()*3)+1;
    let userInput = val;
    userSelection = userInput.toLowerCase();
    console.log ("user: " + userSelection);
    

    if (userSelection == "rock" || userSelection == "paper" || userSelection == "scissors") {
        if (getComputerChoice === 1) {
            const computerSelection = "paper";
            console.log ("computer: " + computerSelection);

            if (userSelection == "paper") {
                console.log("both of you picked paper. It's a draw!");
                draw = draw+1;
            } else if (userSelection == "rock") {
                console.log(userSelection + " beats " + computerSelection + ". You won!" );
                win = win + 1;
            } else {
                console.log (userSelection + " beaten by " + computerSelection + ". You lose!" );
                lose = lose + 1;
            }
        }
        else if (getComputerChoice=== 2) {
            const computerSelection = "scissors";
            console.log ("computer: " + computerSelection);
            //let div = document.createElement('div');
            //div.id = 'computerSelection';
            //div.innerHTML = '<h3>The Computer chose: Scissors</h3>';
            //document.body.appendChild(div);

            if (userSelection == "scissors") {
                console.log("both of you picked scissors. It's a draw!");
                draw = draw+1;
            } else if (userSelection == "rock") {
                console.log(userSelection + " beats " + computerSelection + ". You won!" );
                win = win + 1;
            } else {
                console.log (userSelection + " beaten by " + computerSelection + ". You lose!" );
                lose = lose + 1;
            }
        }
        else {
            const computerSelection = "rock";
            console.log ("computer: " + computerSelection);
            //let div = document.createElement('div');
            //div.id = 'computerSelection';
            //div.innerHTML = '<h3>The Computer chose: Rock</h3>';
            //document.body.appendChild(div);


            if (userSelection == "rock") {
                console.log("both of you picked rock. It's a draw!");
                draw = draw+1;
            } else if (userSelection == "paper") {
                console.log(userSelection + " beats " + computerSelection + ". You won!" );
                win = win + 1;
            } else {
                console.log (userSelection + " beaten by " + computerSelection + ". You lose!" );
                lose = lose + 1;
            }
        }

    } else {
        console.log("invalid input. Please try again.");
    }
    console.log("Draw: " + draw + ". Win: " + win + ". Lose: " + lose + ".");   
    //const computerSelect = document.getElementById("computerSelect");
    const  winScore = document.getElementById("winScore");
    const loseScore = document.getElementById("loseScore");
    const drawScore = document.getElementById("drawScore");

    //computerSelect.textContent = `Computer selected : ${computerSelect}`;
    winScore.textContent = `Player score = ${win}`;
    loseScore.textContent = `Computer score = ${lose}`;
    drawScore.textContent = `Draw = ${draw}`;

    

}else if ( win === 5){
    const result = document.getElementById("result");
    result.textContent = 'player wins!'
} else {
    const result = document.getElementById("result");
    result.textContent = 'computer wins!'
}

};

