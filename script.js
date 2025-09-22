const startBtn = document.getElementById('startBtn');
const flowerArea = document.getElementById('flower-area');

startBtn.addEventListener('click', () => {
  generateSmallFlowers();
  buildBigFlower();
});

// GENERAR FLORES PEQUEÑAS
function generateSmallFlowers() {
  let count = 0;
  const interval = setInterval(() => {
    const flower = document.createElement('div');
    flower.className = 'small-flower';
    flower.style.left = Math.random() * (window.innerWidth - 30) + 'px';
    flowerArea.appendChild(flower);
    setTimeout(() => flower.remove(), 4000);
    count++;
    if (count >= 50) clearInterval(interval);
  }, 150);
}

// CONSTRUIR FLOR GRANDE
function buildBigFlower() {
  if (document.querySelector('.flower-large')) return; // Evita duplicados

  const flower = document.createElement('div');
  flower.className = 'flower-large';

  // Pétalos
  for (let i = 0; i < 6; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.transform = `rotate(${i*60}deg) translateY(-60px)`;
    flower.appendChild(petal);
  }

  // Centro
  const center = document.createElement('div');
  center.className = 'center';
  flower.appendChild(center);

  // Hojas
  for (let i = 0; i < 2; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.transform = i === 0 ? 'rotate(-30deg) translateY(60px)' : 'rotate(30deg) translateY(60px)';
    flower.appendChild(leaf);
  }

  flowerArea.appendChild(flower);
}
