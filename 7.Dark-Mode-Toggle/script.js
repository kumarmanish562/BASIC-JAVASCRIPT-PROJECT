const inputEI = document.querySelector('input');
const bodyEI = document.querySelector('body');



inputEI.checked = JSON.parse(localStorage.getItem('mode'));

updateBody();



function updateBody(){
if(inputEI.checked){
 bodyEI.style.background = 'black';   
} else {
 bodyEI.style.background = 'white';   
}}

inputEI.addEventListener('input', () => {
    updateBody();
    updateLocalStorage();
  });


  function updateLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(inputEI.checked));
  }
  
  