window.addEventListener("DOMContentLoaded", function() {
    const introContainer = document.querySelector(".intro-container");

    setTimeout(function() {
        introContainer.classList.add("show");
    }, 1000); // Add a 1-second delay before the fade-in effect
});
