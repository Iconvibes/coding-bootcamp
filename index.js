// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    function goToPrevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    function goToNextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    // Add event listeners for buttons
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (e.key === 'ArrowRight') {
            goToNextSlide();
        }
    });

    // Initialize first slide
    showSlide(0);
});