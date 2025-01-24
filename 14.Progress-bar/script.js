let number = document.getElementById('number');
let counter = 0;

let interval = setInterval(() => {
  if (counter === 65) {
    clearInterval(interval); // Stops the interval when counter reaches 65
  } else {
    counter += 1;
    number.innerHTML = counter + '%';
  }
}, 20); // Adjusted the interval timing for smoother increments
