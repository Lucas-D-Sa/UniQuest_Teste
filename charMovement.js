const image = document.getElementById('char');
let positionX = 0;
let positionY = 0;

let isFlipped = false;

const zoomLevel = window.devicePixelRatio;

// Velocidades diferentes
const speedArrow = zoomLevel * 100; 
const speedTouch = zoomLevel * 0.1; 

// Dimensões do background
const backgroundWidth = 1280;
const backgroundHeight = 1280;

// Dimensões do personagem
const characterWidth = 12;
const characterHeight = 20;

console.log("Nível de Zoom: " + zoomLevel);

// Adiciona eventos de tecla
document.addEventListener('keydown', handleKeyDown);

// Adiciona eventos de toque
document.addEventListener('touchstart', handleTouchStart, { passive: false });
document.addEventListener('touchmove', handleTouchMove, { passive: false });

// Impede o comportamento padrão do toque e adiciona estilos para desativar os gestos do navegador
document.addEventListener('touchmove', (event) => {
  event.preventDefault();
}, { passive: false });

document.body.style.touchAction = 'none';

// Função para lidar com eventos de tecla
function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') {
    isFlipped = true;
    image.style.transform = `scaleX(-1) rotate(0deg)`;
    positionX = Math.max(0, positionX - speedArrow);
  } else if (event.key === 'ArrowRight') {
    isFlipped = false;
    image.style.transform = `scaleX(1) rotate(0deg)`;
    positionX = Math.min(backgroundWidth - characterWidth, positionX + speedArrow);
  } else if (event.key === 'ArrowUp') {
    positionY = Math.max(0, positionY - speedArrow);
  } else if (event.key === 'ArrowDown') {
    positionY = Math.min(backgroundHeight - characterHeight, positionY + speedArrow);
  }

  // Atualiza a posição do personagem
  image.style.left = positionX + 'px';
  image.style.top = positionY + 'px';
}

// Funções para lidar com eventos de toque
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

  positionX += deltaX * speedTouch;
  positionY += deltaY * speedTouch;

  const angle = Math.atan2(deltaY, deltaX);
  const rotation = angle * (180 / Math.PI);

  image.style.transform = `scaleX(${isFlipped ? -1 : 1}) rotate(${rotation}deg)`;

  positionX = Math.max(0, Math.min(positionX, backgroundWidth - characterWidth));
  positionY = Math.max(0, Math.min(positionY, backgroundHeight - characterHeight));

  image.style.left = positionX + 'px';
  image.style.top = positionY + 'px';

  touchStartX = touchEndX;
  touchStartY = touchEndY;
}
