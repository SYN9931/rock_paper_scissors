//rock-paper-scissors
let draw =0;
let win=0;
let lose=0;





let play = function (val) {
//for ( let i=1; i<=5; i++){
  //  console.log ("------Round " + i + "------");
    let getComputerChoice = Math.floor((Math.random()*3)+1);
    let userInput = val;
    userSelection = userInput.toLowerCase();
    console.log ("user: " + userSelection);
    

    if (userSelection == "rock" || userSelection == "paper" || userSelection == "scissors") {
        if (getComputerChoice == 1) {
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
        else if (getComputerChoice== 2) {
            const computerSelection = "scissors";
            console.log ("computer: " + computerSelection);

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

//}

};
