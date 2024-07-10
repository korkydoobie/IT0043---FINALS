let currentSlide = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}
