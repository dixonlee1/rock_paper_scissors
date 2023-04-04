function getComputerChoice() {
    const item = ["rock", "paper", "scissors"]
    const computerChoice = item[Math.floor(Math.random() * item.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You Win! Rock beats scissors!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You Win! Paper beats rock!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You Win! Scissors beats paper!");
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return ("You Lose! Rocks beats scirsors!");
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return ("You Lose! Paper beats rock!");
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return ("You Lose! Scissors beats paper!");
    } else { return ("error") }
}

let playerSelection = prompt("Rock, Paper, Scissors?")
const computerSelection = getComputerChoice();
console.log("You pick " + playerSelection)
console.log("computer picks " + computerSelection)
console.log(playRound(playerSelection, computerSelection))

