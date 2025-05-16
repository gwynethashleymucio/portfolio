        document.addEventListener("DOMContentLoaded", function() {

            // for heading and caption
            anime({
                targets: '.caption',
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 3000,
                easing: 'easeOutExpo'
            });

            // form container animation 
            anime({
                targets: '.form-container',
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 2000,
                easing: 'easeOutExpo'
            });
        });