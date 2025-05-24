
        window.addEventListener('load', () => {
            const introScreen = document.getElementById('introScreen');
            setTimeout(() => {
                introScreen.classList.add('hide'); // trigger fade out after zoom
                setTimeout(() => {
                    introScreen.style.display = 'none'; // remove intro screen
                }, 1000);
            }, 3000); // wait for 3 seconds to let the zoom happen
        });



        function goToPage(page) {
            window.location.href = page;
        }
