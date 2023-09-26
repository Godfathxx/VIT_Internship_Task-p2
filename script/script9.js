let animationInterval;
let isAnimating = false;
let currentPosition = 0; // Store the current position
let direction = 1; // 1 for right, -1 for left
const step = 5; // Adjust the step size by changing this value
const container = document.getElementById("container");
const movingImage = document.getElementById("movingImage");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

startButton.addEventListener("click", toggleAnimation);
stopButton.addEventListener("click", stopAnimation);

function toggleAnimation() {
  if (!isAnimating) {
    startButton.disabled = true;
    stopButton.disabled = false;
    isAnimating = true;

    animationInterval = setInterval(function () {
      currentPosition += step * direction;

      if (currentPosition >= container.clientWidth) {
        direction = -1; // Change direction to move left
        movingImage.style.transform = "scaleX(-1)"; // Flip the image horizontally
      } else if (currentPosition <= -movingImage.clientWidth) {
        direction = 1; // Change direction to move right
        movingImage.style.transform = "scaleX(1)"; // Reset the image's horizontal scale
      }

      movingImage.style.left = currentPosition + "px";
    }, 50); // Adjust the animation speed by changing this value
  } else {
    stopAnimation();
  }
}

function stopAnimation() {
  startButton.disabled = false;
  stopButton.disabled = true;
  isAnimating = false;
  clearInterval(animationInterval);
}