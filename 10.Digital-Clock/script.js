const hourEI = document.getElementById('hour');
const minutesEI = document.getElementById('minutes');
const secondsEI = document.getElementById('seconds');
const ampmEI = document.getElementById('ampm');

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = 'AM';

  if (h > 12) {
    h -= 12;
    ampm = 'PM';
  }
  
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

  hourEI.innerText = h ; 
  minutesEI.innerText = m;
  secondsEI.innerText = s ;
  ampmEI.innerText = ampm;
}


setInterval(updateClock, 1000);


updateClock();


