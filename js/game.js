const buttons = document.querySelectorAll('.game-button');
const scoreDisplay = document.getElementById('score');
let pattern = [];
let playerPattern = [];
let score = 0;

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const buttonIndex = Array.from(buttons).indexOf(event.target);
    playerPattern.push(buttonIndex);
    checkPattern();
}

function checkPattern() {
    for (let i = 0; i < playerPattern.length; i++) {
        if (playerPattern[i] !== pattern[i]) {
            alert(`Game Over! Your score is ${score}`);
            resetGame();
            return;
        }
    }
    if (playerPattern.length === pattern.length) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        playerPattern = [];
        addToPattern();
        playPattern();
    }
}

function addToPattern() {
    const randomIndex = Math.floor(Math.random() * buttons.length);
    pattern.push(randomIndex);
}

function playPattern() {
    let delay = 500;
    pattern.forEach((index, i) => {
        setTimeout(() => {
            lightUpButton(index);
        }, delay * (i + 1));
    });
}

function lightUpButton(index) {
    buttons[index].classList.add('active');
    setTimeout(() => {
        buttons[index].classList.remove('active');
    }, 300);
}

function resetGame() {
    pattern = [];
    playerPattern = [];
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    addToPattern();
    playPattern();
}

function startGame() {
    resetGame();
}

// Start the game when the page loads
startGame();
