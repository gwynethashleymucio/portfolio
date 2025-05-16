    document.addEventListener("DOMContentLoaded", function () {

        anime({
            targets: '.home-text',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 2000,
            easing: 'easeOutExpo'
        });

        // tech section
        anime({
            targets: '.section-title',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(300), // stagger each section
            duration: 1500,
            easing: 'easeOutExpo'
        });

        // icons animation
        anime({
            targets: '.section-item',
            opacity: [0, 1],
            translateY: [40, 0],
            delay: anime.stagger(100, { start: 1000 }),
            duration: 700,
            easing: 'easeOutQuad'
        });
    });