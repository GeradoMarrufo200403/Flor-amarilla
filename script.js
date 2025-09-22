document.addEventListener('DOMContentLoaded', () => {
    
    // Referencias a los elementos del DOM
    const surpriseButton = document.getElementById('surpriseButton'); 
    const surpriseContent = document.getElementById('surpriseContent');
    const mainFlower = document.getElementById('mainFlower');
    const smallFlowersContainer = document.getElementById('smallFlowersContainer');
    const earthFooter = document.getElementById('earth-footer');

    // Variable para contar los clics en la flor principal.
    let flowerClickCounter = 0;

    // Función de confeti (sin cambios)
    function partyTime() {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        function randomInRange(min, max) { return Math.random() * (max - min) + min; }
        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) { return clearInterval(interval); }
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
        setTimeout(() => { confetti({ particleCount: 200, spread: 180, origin: { y: 0.6 } }); }, 1000);
    }

    // Función para crear flores pequeñas (con altura aleatoria CORREGIDA)
    function createSmallFlower() {
        const flower = document.createElement('img');
        flower.src = 'FlowerYellow.webp';
        flower.classList.add('small-flower');

        const flowerWidth = 50;
        const containerWidth = window.innerWidth;
        const randomX = Math.random() * (containerWidth - flowerWidth); 
        flower.style.left = `${randomX}px`;

        // --- CORRECCIÓN CLAVE: Rango de altura ajustado para el pasto verde ---
        // El footer mide 100px. El pasto verde está aproximadamente entre los 50px y 95px desde abajo.
        // Este nuevo cálculo posicionará la base de la flor aleatoriamente DENTRO de esa franja verde.
        const randomBottom = Math.random() * (95 - 50) + 50; // Rango entre 50px y 95px
        flower.style.bottom = `${randomBottom}px`; 

        smallFlowersContainer.appendChild(flower);
    }

    // Evento para el botón de texto "Ver sorpresa"
    surpriseButton.addEventListener('click', () => {
        surpriseButton.classList.add('hidden');
        surpriseContent.classList.remove('hidden');
        earthFooter.classList.remove('hidden');
        partyTime();
    });

    // Evento para la flor principal (con la lógica de contador y reinicio)
    mainFlower.addEventListener('click', () => {
        mainFlower.classList.add('clicked');

        flowerClickCounter++;

        if (flowerClickCounter > 10) {
            const allSmallFlowers = document.querySelectorAll('.small-flower');
            allSmallFlowers.forEach(flower => flower.remove());
            flowerClickCounter = 0;
        } else {
            for(let i = 0; i < 5; i++) {
                setTimeout(createSmallFlower, i * 100);
            }
        }
        
        mainFlower.addEventListener('animationend', () => {
            mainFlower.classList.remove('clicked');
        }, { once: true });
    });
});
