const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let currentRound = 1;
const totalRounds = 5; // You can adjust this number based on how long you want the game to be
const roundDisplay = document.getElementById('round');

function playRound(playerChoice) {
    if (currentRound <= totalRounds) {

        roundDisplay.textContent = `Round: ${currentRound} of ${totalRounds}`;
        currentRound++;
        console.log(currentRound)

        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (playerChoice === computerChoice) {
            resultDisplay.textContent = 'It\'s a draw!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultDisplay.textContent = 'You win!';
            playerScore++;
        } else {
            resultDisplay.textContent = 'Computer wins!';
            computerScore++;
        }

        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    }
    
    if (currentRound > totalRounds) {
        concludeGame();
    }
}

function concludeGame() {
    const gameContainer = document.getElementById('rps-game');
    const choices = document.getElementById('choices');
    const gameInfo = document.getElementById('game-info');
    const roundRes = document.getElementById('result');
    if (choices) {
        choices.style.display = 'none';
    }

    if (gameInfo) {
        gameInfo.style.display = 'none';
    }

    if (roundRes) {
        roundRes.style.display = 'none';
    }

    const gameConclusion = document.createElement('div');
    gameConclusion.setAttribute('id', 'game-conclusion');

    let finalMessage = '';
    if (playerScore > computerScore) {
        finalMessage = 'Congratulations, you won the game!';
    } else if (playerScore < computerScore) {
        finalMessage = 'Game over, the computer wins!';
    } else {
        finalMessage = 'The game ends in a draw!';
    }

    gameConclusion.innerHTML = `
        <h2>Game Over</h2>
        <p>${finalMessage}</p>
        <p>Final Score - You: ${playerScore} | Computer: ${computerScore}</p>
        <button id="restart-btn" style="background-color: #ff4081; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Try again</button>

    `;

    gameContainer.appendChild(gameConclusion);
    document.getElementById('restart-btn').addEventListener('click', restartGame);
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;

    playerScoreDisplay.textContent = 'Player Score: 0';
    computerScoreDisplay.textContent = 'Computer Score: 0';
    roundDisplay.textContent = `Round: 1 of ${totalRounds}`;

    const choices = document.getElementById('choices');
    const gameInfo = document.getElementById('game-info');
    const roundRes = document.getElementById('result');
    if (choices) {
        choices.style.display = '';
    }

    if (gameInfo) {
        gameInfo.style.display = '';
    }

    if (roundRes) {
        roundRes.style.display = '';
    }

    const gameConclusion = document.getElementById('game-conclusion');
    if (gameConclusion) {
        gameConclusion.remove();
    }

    document.getElementById('choices').style.display = '';
    resultDisplay.textContent = 'Choose your weapon!';
}