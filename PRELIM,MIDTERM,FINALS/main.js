document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".image-container img");
    const pdfLink = document.querySelector(".pdf-container a");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > image.offsetTop) {
            image.classList.add("fade-in");
        }

        if (scrollPosition > pdfLink.offsetTop) {
            pdfLink.classList.add("fade-in");
        }
    });
});
