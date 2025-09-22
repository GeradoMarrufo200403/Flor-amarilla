// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // Obtiene los elementos del HTML por su ID
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseContent = document.getElementById('surpriseContent');
    const confettiCanvas = document.getElementById('confetti-canvas');
    
    // Configura el confeti para que use el canvas que creamos
    const myConfetti = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true
    });

    // Esta función lanza el confeti de forma espectacular
    function launchConfetti() {
        // Lanza un chorro de confeti desde varias posiciones
        myConfetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 0.6 }
        });

        myConfetti({
            particleCount: 100,
            spread: 120,
            origin: { x: 0, y: 1 }
        });

        myConfetti({
            particleCount: 100,
            spread: 120,
            origin: { x: 1, y: 1 }
        });
    }

    // Escucha el evento "click" en el botón
    surpriseButton.addEventListener('click', () => {
        // 1. Oculta el botón
        surpriseButton.classList.add('hidden');
        
        // 2. Muestra el contenido de la sorpresa (el mensaje y la flor)
        surpriseContent.classList.remove('hidden');

        // 3. ¡Lanza el confeti!
        launchConfetti();
        
        // Opcional: sigue lanzando confeti cada cierto tiempo para un efecto continuo
        setInterval(launchConfetti, 3000); 
    });
});
