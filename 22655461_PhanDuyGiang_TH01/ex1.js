let score, secretNumber;

function initGame() {
    score = 20;
    secretNumber = 20; // Đặt số bí mật là 20

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 'Score: ' + score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.body.style.backgroundColor = '#222'; // Khôi phục màu nền
    document.querySelector('.number').style.width = '15rem';
}

function checkGuess() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.body.style.backgroundColor = '#222'; // Đúng số
        document.querySelector('.number').textContent = secretNumber;
    } else {
        document.querySelector('.message').textContent = 'Wrong Number!';
        document.body.style.backgroundColor = '#ff4d4d'; // Sai số
    }
}

document.querySelector('.btn').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', initGame);

// Khởi động trò chơi khi tải trang
initGame();