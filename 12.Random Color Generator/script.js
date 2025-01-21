const containerEI = document.querySelector('.container');

// Create 32 color containers dynamically
for (let index = 0; index < 32; index++) {
  const colorContainerEI = document.createElement('div');
  colorContainerEI.classList.add('color-container');
  containerEI.appendChild(colorContainerEI);
}

const colorContainerEIs = document.querySelectorAll('.color-container');

// Function to generate colors
function generateColors() {
  colorContainerEIs.forEach((colorContainerEI) => {
    const newColorCode = randomColor();
    colorContainerEI.style.backgroundColor = `#${newColorCode}`;
    colorContainerEI.innerHTML = '#' + newColorCode;
  });
}

// Function to generate a random 6-character hex color code
function randomColor() {
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;
  let colorCode = '';
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars[randomNum];
  }
  return colorCode;
}

// Call the function to generate colors
generateColors();
