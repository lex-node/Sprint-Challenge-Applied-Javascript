/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgArr = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]

const CarouselCreator = (imgArr) => {
    //create carousel container
    const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel');

    //create buttons
    const leftButton = document.createElement('div');
    leftButton.textContent = '<'
    leftButton.classList.add('left-button');
    const rightButton = document.createElement('div');
    rightButton.textContent = '>'
    rightButton.classList.add('right-button');
    carouselDiv.appendChild(rightButton);
    carouselDiv.appendChild(leftButton);


    imgArr.map((img, index) => {
        const imgDiv = document.createElement('img');
        imgDiv.classList.add(`img-${index}`);
        index === 0 && (imgDiv.style.display = 'flex');
        imgDiv.src = img;
        return carouselDiv.appendChild(imgDiv);
    })

    //add clickhandlers to buttons
    let currentImgIndex = 0;
    leftButton.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(`.img-${currentImgIndex}`).style.display = 'none';
        currentImgIndex === 0 ? currentImgIndex = 3 : currentImgIndex--;
        document.querySelector(`.img-${currentImgIndex}`).style.display = 'flex';
    });

    rightButton.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(`.img-${currentImgIndex}`).style.display = 'none';
        currentImgIndex === 3 ? currentImgIndex = 0 : currentImgIndex++;
        document.querySelector(`.img-${currentImgIndex}`).style.display = 'flex';
    });


    return carouselDiv;
}

document.querySelector('.carousel-container').appendChild(CarouselCreator(imgArr));
