document.addEventListener('DOMContentLoaded', () => {

let imgBox = document.querySelector('#imgBox');
let qrImage = document.querySelector('#qrImage'); 
let qrText = document.querySelector('#qrText');
let downloadBtn = document.querySelector('#downloadBtn');

function generateQR() {
  if (qrText.value.length > 0) {
    // Generate the QR code using the input value
    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(qrText.value);
    imgBox.classList.add('show-img'); // Show the image box with the QR code
  } else {
    qrText.classList.add('error'); // Add error class if input is empty
    setTimeout(() => {
      qrText.classList.remove('error'); // Remove error class after 1 second
    }, 1000);
  }
}

function downloadQR() {
  const link = document.createElement('a');
  link.href = qrImage.src; // Set the download link to the QR code image's src
  link.href = qrImage.src;
  link.download = 'qr_code.jpg'; // Set the default filename for download
  link.click(); // Trigger the download
}

// Make the functions accessible in the global scope for inline HTML usage
window.generateQR = generateQR;
window.downloadQR = downloadQR;
});
