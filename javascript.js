//rock-paper-scissors
let getComputerChoice = Math.floor((Math.random()*3)+1);
let userInput = prompt();
userSelection = userInput.toLowerCase();
console.log ("user: " + userSelection);

if (getComputerChoice == 1) {
    const computerSelection = "rock";
    console.log ("computer: " + computerSelection);
}
else if (getComputerChoice== 2) {
    const computerSelection = "paper";
    console.log ("computer: " + computerSelection);
}
else {
    const computerSelection = "scissors";
    console.log ("computer: " + computerSelection);
}

