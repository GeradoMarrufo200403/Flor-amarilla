// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseContent = document.getElementById('surpriseContent');

    // Función para la explosión de confeti
    function partyTime() {
        const duration = 5 * 1000; // La celebración dura 5 segundos
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // Lanza confeti desde ambos lados de la pantalla
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        // Un último estallido para el final
        setTimeout(() => {
            confetti({
                particleCount: 200,
                spread: 180,
                origin: { y: 0.6 }
            });
        }, 1000);
    }

    // Escucha el evento "click" en el botón
    surpriseButton.addEventListener('click', () => {
        // 1. Oculta el botón
        surpriseButton.classList.add('hidden');
        
        // 2. Muestra el contenido de la sorpresa
        surpriseContent.classList.remove('hidden');

        // 3. ¡Lanza la fiesta de confeti!
        partyTime();
    });
});
