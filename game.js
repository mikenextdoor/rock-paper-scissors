const prompt = require("prompt-sync")();

const plays = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    return number
}

function getHumanChoice() {
    let play = prompt("Whats your play? (Rock, Paper, Scissors) ").toLowerCase();
    if (play == "rock") {
        return 0;
    } else if (play == "paper") {
        return 1;
    } else if (play == "scissors") {
        return 2;
    } else {
        console.log("Not a valid play");
        return getHumanChoice()
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("Draw!")
    } else if (
        (humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors') ||
        (humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock') ||
        (humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper')
    ) {
        humanScore++
        console.log("You won!")
    } else if (
        (computerChoice.toLowerCase() === 'rock' && humanChoice.toLowerCase() === 'scissors') ||
        (computerChoice.toLowerCase() === 'paper' && humanChoice.toLowerCase() === 'rock') ||
        (computerChoice.toLowerCase() === 'scissors' && humanChoice.toLowerCase() === 'paper')
    ) {
        computerScore++
        console.log("You lost!")
    }
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
}

function playGame() {
    for (let index = 0; humanScore < 5 && computerScore < 5; index++) {
        playRound(plays[getHumanChoice()].toLowerCase(), plays[getComputerChoice()].toLowerCase())
    }
    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else {
        console.log("You lost the game!")
    }
    humanScore = 0;
    computerScore = 0;
    let again = prompt("Play again? (yes/no) ").toLowerCase();
    if (again.toLowerCase() === "yes") {
        playGame();
    }
}

playGame();