const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slider = document.querySelector('.slider');
    const offset = -currentIndex * 100;  // Moves by 100% of the width per slide
    slider.style.transform = `translateX(${offset}%)`;
}

// Automatically move to the next slide every 3 seconds
setInterval(moveToNextSlide, 1000);

// Optional: Add manual control to stop on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});
sliderContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(moveToNextSlide, 3000);
});

