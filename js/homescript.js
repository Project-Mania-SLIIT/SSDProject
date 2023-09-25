var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        if (slides[i] instanceof HTMLElement) {
            slides[i].style.display = "none";
        } else {
            console.error("Invalid DOM element at index 'i'");
        }
    }
    for (i = 0; i < dots.length; i++) {
        //dots[i].className = dots[i].className.replace(" active", "");
        if (Array.isArray(dots) && Number.isInteger(i) && i >= 0 && i < dots.length) {
            // Check if 'active' class exists in the element's class list before replacing it
            if (dots[i].classList.contains("active")) {
                dots[i].classList.remove("active");
            }
        } else {
            console.error("Invalid input for 'dots' or 'i'");
        }
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}