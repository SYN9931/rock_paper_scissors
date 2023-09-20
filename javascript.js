//rock-paper-scissors
let getComputerChoice = Math.floor((Math.random()*3)+1);

if (getComputerChoice == 1) {
    const computerSelection = "rock";
    console.log (computerSelection);
}
else if (getComputerChoice== 2) {
    const computerSelection = "paper";
    console.log (computerSelection);
}
else {
    const computerSelection = "scissors";
    console.log (computerSelection);
}




