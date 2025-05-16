       document.addEventListener("DOMContentLoaded", function() {
            // para sa animation and transitions
            anime({
                targets: '.home-text',
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 3000,
                easing: 'easeOutExpo'
            });

            anime({
                targets: '.certification-card',
                opacity: [0, 1],
                translateY: [50, 0],
                delay: anime.stagger(200),
                duration: 2000,
                easing: 'easeOutExpo'
            });

            // certification button hover animations
            anime({
                targets: '.certification-details button',
                scale: [1, 1.1],
                duration: 3000,
                easing: 'easeInOutQuad',
                loop: true,
                direction: 'alternate'
            });
        });
        