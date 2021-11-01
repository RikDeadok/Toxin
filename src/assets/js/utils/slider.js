let slideIndex = 1;
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

next.addEventListener('click', () => {
    showSlides(slideIndex += 1);
})
previous.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
})

showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("slider__item");
    let indicators = document.getElementsByClassName("indicators__item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    for (let indicator of indicators) {
        indicator.classList.remove('active')
    }
    indicators[slideIndex - 1].classList.add('active');
}