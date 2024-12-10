let currentIndex = 0;
const images = document.querySelectorAll('.carousel-container img');
const totalImages = images.length;

function showNextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

// Avança as imagens a cada 3 segundos
setInterval(showNextImage, 3000);
