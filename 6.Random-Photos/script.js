const imageContainerEI = document.querySelector('.image-container');

const btnEI = document.querySelector('.btn');

btnEI.addEventListener('click', () => {
   imagesNum = 12;
addNewImages();
});

function addNewImages() {
    for (let index = 0; index < imagesNum; index++) {
      const newImgEI = document.createElement('img');
      newImgEI.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
      imageContainerEI.appendChild(newImgEI);
      }
  }
    
   