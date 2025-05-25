const container = document.querySelector(".image-container");

let currentAngle = 0;
const rotationSpeed = 0.2;

let dragging = false;
let dragStartX = 0;
let angleAtStart = 0;

function animateRotation() {
  if (!dragging) {
    currentAngle = (currentAngle + rotationSpeed) % 360;
  }
  container.style.transform = `translateZ(-150px) rotateY(${currentAngle}deg)`;
  requestAnimationFrame(animateRotation);
}

animateRotation();

container.addEventListener("mousedown", (e) => {
  dragging = true;
  dragStartX = e.clientX;
  angleAtStart = currentAngle;
});

window.addEventListener("mouseup", () => {
  dragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  const moveX = e.clientX - dragStartX;
  currentAngle = (angleAtStart + moveX * 0.5) % 360;
});

container.addEventListener("touchstart", (e) => {
  dragging = true;
  dragStartX = e.touches[0].clientX;
  angleAtStart = currentAngle;
});

window.addEventListener("touchend", () => {
  dragging = false;
});

window.addEventListener("touchmove", (e) => {
  if (!dragging) return;
  const moveX = e.touches[0].clientX - dragStartX;
  currentAngle = (angleAtStart + moveX * 0.5) % 360;
  e.preventDefault();
}, { passive: false });
