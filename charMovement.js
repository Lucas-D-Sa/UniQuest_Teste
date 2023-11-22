const image = document.getElementById('char');
let positionX = 0;
let positionY = 0;

let isFlipped = false;

const zoomLevel = window.devicePixelRatio;

const speed = zoomLevel * 0.5; 

// Dimensões do background
const backgroundWidth = 1280;
const backgroundHeight = 1280;

// Dimensões do personagem
const characterWidth = 12;
const characterHeight = 20;

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

  positionX += deltaX;
  positionY += deltaY;

  positionX = Math.max(0, Math.min(positionX, backgroundWidth - characterWidth));
  positionY = Math.max(0, Math.min(positionY, backgroundHeight - characterHeight));

  image.style.left = positionX + 'px';
  image.style.top = positionY + 'px';

  touchStartX = touchEndX;
  touchStartY = touchEndY;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    isFlipped = true;
    image.style.transform = 'scaleX(-1)';
    positionX = Math.max(0, positionX - speed);
  } else if (event.key === 'ArrowRight') {
    isFlipped = false;
    image.style.transform = 'scaleX(1)';
    positionX = Math.min(backgroundWidth - characterWidth, positionX + speed);
  } else if (event.key === 'ArrowUp') {
    positionY = Math.max(0, positionY - speed);
  } else if (event.key === 'ArrowDown') {
    positionY = Math.min(backgroundHeight - characterHeight, positionY + speed);
  }

  image.style.left = positionX + 'px';
  image.style.top = positionY + 'px';
});
