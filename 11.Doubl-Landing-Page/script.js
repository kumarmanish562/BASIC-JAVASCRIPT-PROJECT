const containerEI = document.querySelector('.container');
const leftEI = document.querySelector('.left');
const rightEI = document.querySelector('.right');

leftEI.addEventListener('mousemove', (event) => {
  containerEI.classList.add('active-left');
});
leftEI.addEventListener('mouseleave', () => {
  containerEI.classList.remove('active-left');
});

rightEI.addEventListener('mousemove', (event) => {  
  containerEI.classList.add('active-right');
});
rightEI.addEventListener('mouseleave', () => {
  containerEI.classList.remove('active-right');
});