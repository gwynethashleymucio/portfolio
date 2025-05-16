document.addEventListener("DOMContentLoaded", function () {

        anime({
            targets: '.hiintro h1',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 2000,
            easing: 'easeOutExpo'
        });

        // selfie image animation
        anime({
            targets: '.selfieimage img',
            opacity: [0, 1],
            translateX: [-100, 0],
            duration: 2000,
            delay: 500,
            easing: 'easeOutExpo'
        });

        // paragraph
        anime({
            targets: '.intro p',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1800,
            delay: anime.stagger(400),
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.see-details h2',
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 2000,
            delay: 1200,
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.comment-section',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 2000,
            delay: 2200,
            easing: 'easeOutExpo'
        });
    });
    
        anime({
            targets: '.heart-gif',
            scale: [0.5, 1],
            rotate: [-10, 10],
            duration: 1200,
            delay: 2200,
            easing: 'easeOutElastic(1, .8)'
        });