const image = document.getElementById('char');
let positionX = 0;
let positionY = 0;

let isFlipped = false;

const zoomLevel = window.devicePixelRatio;

const speed = zoomLevel * 2; 

console.log("Nível de Zoom: " + zoomLevel);

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  event.preventDefault();

  const touchEndX = event.touches[0].clientX;
  const touchEndY = event.touches[0].clientY;

  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
  
    if (deltaX > 0) {
      isFlipped = false;
      image.style.transform = 'scaleX(1)';
      positionX += speed;
    } else {
      isFlipped = true;
      image.style.transform = 'scaleX(-1)';
      positionX -= speed;
    }
  } else {
    
    if (deltaY > 0) {
      positionY += speed;
    } else {
      positionY -= speed;
    }
  }

  image.style.left = positionX + 'px';
  image.style.top = positionY + 'px';

  touchStartX = touchEndX;
  touchStartY = touchEndY;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    isFlipped = true;
    image.style.transform = 'scaleX(-1)';
    positionX -= speed;
  } else if (event.key === 'ArrowRight') {
    isFlipped = false;
    image.style.transform = 'scaleX(1)';
    positionX += speed;
  } else if (event.key === 'ArrowUp') {
    positionY -= speed;
  } else if (event.key === 'ArrowDown') {
    positionY += speed;
  }

  image.style.left = positionX + 'px';
  image.style.top = positionY + 'px';
});
