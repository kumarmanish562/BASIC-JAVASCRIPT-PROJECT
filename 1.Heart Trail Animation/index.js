const bodyEI = document.querySelector('body');

bodyEI.addEventListener('mousemove', (event) => {
  // console.log(' moouse moved');
  // console.log(event.offsetX);
  // console.log(event.offsetY);
  const xPOS = event.offsetX;
  const yPOS = event.offsetY;
  const spanEI = document.createElement('span');
  spanEI.style.left = xPOS + 'px';
  spanEI.style.top = yPOS + 'px';
  const size = Math.random() * 100;
  spanEI.style.width = size + 'px';
  spanEI.style.height = size + 'px';
  bodyEI.appendChild(spanEI);
  setTimeout(() => {
    spanEI.remove();
  }, 3000);
});