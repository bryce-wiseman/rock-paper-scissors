//variables

const computerChoiceDisplay = document.getElementById("computer-choice")
const playerChoiceDisplay = document.getElementById("player-choice")
const resultDisplay = document.getElementById("round-result")
const options = document.querySelectorAll(".submit")
let playerChoice

const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score")
let playerScore = 0
let computerScore = 0


options.forEach(option => option.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    getComputerChoice()
    playRound()
    playerScoreDisplay.innerHTML = playerScore
    computerScoreDisplay.innerHTML = computerScore
}))

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        computerChoice = "rock"
    } else if (randomNumber === 1) {
        computerChoice = "paper"
    } else if (randomNumber === 2) {
        computerChoice = "scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function playRound() {
    if (playerChoice === computerChoice) {
        resultDisplay.innerHTML = "It's a tie!"
    } else if (playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock") {
        resultDisplay.innerHTML = "You lose!"
        computerScore += 1
        if (computerScore == 5) {
            disableButtons()
            resultDisplay.innerHTML = "Well, you lost this time...wanna go again?"
        }
    } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        resultDisplay.innerHTML = "You win!"
        playerScore += 1
        if (playerScore == 5) {
            disableButtons()
            resultDisplay.innerHTML = "Nice work beating me! It won't happen again though..."
        }
    }
}

function playGame() {
    playRound()
    if (playerScore === 5 || computerScore === 5) {
        location.reload()
    }
}

function disableButtons() {
    options.forEach(elem => {
        elem.disabled = true
    })
}

// defining reset button
const playAgain = document.querySelector("#play-again");
playAgain.addEventListener('click',() => location.reload());

