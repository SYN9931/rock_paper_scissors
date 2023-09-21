//rock-paper-scissors
let getComputerChoice = Math.floor((Math.random()*3)+1);
let userInput = prompt();
userSelection = userInput.toLowerCase();
console.log ("user: " + userSelection);

if (getComputerChoice == 1) {
    const computerSelection = "paper";
    console.log ("computer: " + computerSelection);

    if (userSelection == "paper") {
        console.log("both of you picked paper. It's a draw!");
    } else if (userSelection == "rock") {
        console.log(userSelection + " beats " + computerSelection + ". You won!" );
    } else {
        console.log (userSelection + " beaten by " + computerSelection + ". You lose!" );
    }
}
else if (getComputerChoice== 2) {
    const computerSelection = "scissors";
    console.log ("computer: " + computerSelection);

    if (userSelection == "scissors") {
        console.log("both of you picked scissors. It's a draw!");
    } else if (userSelection == "rock") {
        console.log(userSelection + " beats " + computerSelection + ". You won!" );
    } else {
        console.log (userSelection + " beaten by " + computerSelection + ". You lose!" );
    }
}
else {
    const computerSelection = "rock";
    console.log ("computer: " + computerSelection);


    if (userSelection == "rock") {
        console.log("both of you picked rock. It's a draw!");
    } else if (userSelection == "paper") {
        console.log(userSelection + " beats " + computerSelection + ". You won!" );
    } else {
        console.log (userSelection + " beaten by " + computerSelection + ". You lose!" );
    }
}

