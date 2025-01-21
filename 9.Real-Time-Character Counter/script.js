const textareaEI = document.getElementById('textarea');
const totalCounterEI = document.getElementById('total-counter');
const remainingCounterEI = document.getElementById('remaining-counter');

textareaEI.addEventListener('keyup', () => {
  updateCounter();
});
updateCounter();

function updateCounter() {
  totalCounterEI.innerText = textareaEI.value.length;
  remainingCounterEI.innerText = 
  textareaEI.getAttribute('maxlength') - textareaEI.value.length;

  // remainingCounterEI.innerText = 70 - textareaEI.value.length;
}
