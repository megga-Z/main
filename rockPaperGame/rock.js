let buttons = document.querySelectorAll('.btn button');
let userScoreId = document.getElementById('user-score');
let computerScoreId = document.getElementById('computer-score');
let resultId = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultId.textContent = result;
    })
})

function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "it is a tie"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        userScoreId.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        computerScoreId.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }

}