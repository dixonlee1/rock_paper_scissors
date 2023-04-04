function getComputerChoice() {
    const item = ["Rock", "Paper", "Scissors"]
    const computerChoice = item [Math.floor(Math.random() * item.length)];
    return computerChoice;
}

