function showMessage() {
    const message = document.getElementById('hidden-message');
    message.style.display = 'block';
    startConfetti();
}

// Confetti Animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];
const colors = ['#ff4d6d', '#ffd1dc', '#ff85a2', '#ffb3c6', '#ffccd5'];

function createConfetti() {
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            rotation: Math.random() * 360
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach((piece, index) => {
        ctx.fillStyle = piece.color;
        ctx.beginPath();
        ctx.arc(piece.x, piece.y, piece.size / 2, 0, Math.PI * 2);
        ctx.fill();
        piece.y += piece.speedY;
        if (piece.y > canvas.height) piece.y = -10;
    });
    requestAnimationFrame(drawConfetti);
}

function startConfetti() {
    createConfetti();
    drawConfetti();
}