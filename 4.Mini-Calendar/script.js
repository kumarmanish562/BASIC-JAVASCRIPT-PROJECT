const monthNameEI = document.querySelector('.month-name');
const yearNameEI = document.querySelector('.year-name');
const dayNameEI = document.querySelector('.day-name');
const dayNumberEI = document.querySelector('.day-number');

const date = new Date();
const month = date.getMonth();
monthNameEI.innerHTML = date.toLocaleString('en',{
    month: 'long'
})

dayNameEI.innerHTML = date.toLocaleString('en',{
    weekday: 'long'
})
dayNumberEI.innerHTML = date.getDate();
yearNameEI.innerHTML = date.getFullYear();