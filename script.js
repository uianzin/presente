let currentIndex = 0;

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateCarousel() {
  const width = images[0].clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
