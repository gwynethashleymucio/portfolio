        // function to open the image in the modal
        function openModal(imageSrc) {
            document.getElementById("modalImage").src = imageSrc;
            document.getElementById("modal").style.display = "block";
        }

        // function to close the image when clicking outside the image
        function closeModal(event) {
            // check if the click happened outside the modal content
            if (event.target === document.getElementById("modal")) {
                document.getElementById("modal").style.display = "none";
            }
        }
