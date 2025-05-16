  document.addEventListener("DOMContentLoaded", function () {
        // heading animation
        anime({
            targets: '.home-text',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 3000,
            easing: 'easeOutExpo'
        });

          anime({
        targets: '.about p',
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1700,
        delay: anime.stagger(400),
        easing: 'easeOutQuad'
      });

      //for mouse hover
      document.querySelectorAll('.about p').forEach(paragraph => {
      paragraph.addEventListener('mouseenter', () => {
        anime({
          targets: paragraph,
          scale: 1.05,
          opacity: 1,
          duration:100,
          easing: 'easeInOutQuad'
        });
      });

      paragraph.addEventListener('mouseleave', () => {
        anime({
          targets: paragraph,
          scale: 1,
          opacity: 0.9,
          duration: 100,
          easing: 'easeInOutQuad'
        });
      });
    });
        //about me animation
              anime({
          targets: '.about h2',
          opacity: [0, 1],
          translateY: [-50, 0],
          duration: 2000,
          easing: 'easeOutExpo'
        });

        // selfie image animation (from left)
        anime({
            targets: '.selfieimage',
            opacity: [0, 1],
            translateX: [-100, 0],
            delay: 1600,
            duration: 2100,
            easing: 'easeOutExpo'
        });
    });
