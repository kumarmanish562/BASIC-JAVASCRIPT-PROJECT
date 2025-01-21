const testimonial = [
  {
    name: 'Emily Johnson',
    photoUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: 'I cannot imagine my life without my Apple mobile phone. Their sleek design and user-friendly interface make it a top choice for me. I highly recommend Apple to anyone looking for quality mobile phones.'
  },
  {
    name: 'Sophia Johnson',
    photoUrl: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHwxfDB8fHww",
    text: 'I have been a loyal customer of Apple for years, and I can confidently say their mobile phones are unparalleled in quality and innovation. The sleek design and user-friendly interface make it a top choice for tech-savvy individuals like myself.'
  },
  {
    name: 'Sarah Johnson',
    photoUrl: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: 'I am extremely satisfied with the innovative mobile phones from Apple. The sleek design and powerful features make it a must-have for tech enthusiasts like me. I highly recommend Apple to anyone looking for top-notch quality and reliability in their devices.'
  },
];

const imgEI = document.querySelector('img');
const textEI = document.querySelector('.text');
const nameEI = document.querySelector('.username');

let idx = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonial[idx];
  imgEI.src = photoUrl;
  textEI.innerText = text;
  nameEI.innerText = name;
  idx++;
  if (idx === testimonial.length) {
    idx = 0;
  }
  setTimeout(updateTestimonial, 10000);
}

// Start the cycle
updateTestimonial();
