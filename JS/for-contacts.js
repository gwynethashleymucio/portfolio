    document.addEventListener("DOMContentLoaded", function() {
                // for heading and caption
                anime({
                    targets: '.home-text',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 3000,
                    easing: 'easeOutExpo'
                });

                // contact-info animation
                anime({
                    targets: '#contact-info',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 2500,
                    easing: 'easeOutExpo'
                });

                // comment-section animation
                anime({
                    targets: '.comment-section',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 2000,
                    delay: 500,
                    easing: 'easeOutExpo'
                });

                anime({
                    targets: '.heart-gif',
                    scale: [0.5, 1],
                    rotate: [-10, 10],
                    duration: 1200,
                    delay: 500,
                    easing: 'easeOutElastic(1, .8)'
                });
            });
