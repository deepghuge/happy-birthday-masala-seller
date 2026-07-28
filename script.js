// ---------- Falling spice/confetti ----------
const emojiSet = ['🌶️', '🧄', '🧅', '🎉', '✨', '🎈'];
const confettiLayer = document.getElementById('confettiLayer');

function spawnConfetti(count) {
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = emojiSet[Math.floor(Math.random() * emojiSet.length)];
    piece.style.left = Math.random() * 100 + 'vw';
    const duration = 4 + Math.random() * 4;
    piece.style.animationDuration = duration + 's';
    piece.style.fontSize = (16 + Math.random() * 14) + 'px';
    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), duration * 1000 + 200);
  }
}

// gentle continuous drizzle
setInterval(() => spawnConfetti(2), 900);
spawnConfetti(14);

// big burst on button click
const confettiBtn = document.getElementById('confettiBtn');
confettiBtn.addEventListener('click', () => spawnConfetti(40));

// ---------- Cake candle blow ----------
const candle = document.getElementById('candle');
const flame = document.getElementById('flame');
const cakeHint = document.getElementById('cakeHint');
let blownOut = false;

candle.addEventListener('click', () => {
  if (blownOut) {
    flame.classList.remove('blown');
    cakeHint.textContent = '';
    blownOut = false;
  } else {
    flame.classList.add('blown');
    cakeHint.textContent = '🎂 Wish made! May her year be as flavourful as her spice mix.';
    spawnConfetti(30);
    blownOut = true;
  }
});
