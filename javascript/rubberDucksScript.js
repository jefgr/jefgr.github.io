// carousel.js

let slideIndex = 0;

function initCarousel() {
  showSlide(slideIndex);

  document.getElementById('prevBtn').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
  });
}

function showSlide(index) {
  const slides = document.getElementsByClassName('carousel-slide');

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[slideIndex].classList.add('active');
}

// Initialize everything once the DOM content is loaded
document.addEventListener('DOMContentLoaded', initCarousel);
