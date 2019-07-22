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


let imageData = [
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg"
]


const carouselMaker = (urlStrings) => {
    let carouselDiv = document.createElement("div");
    carouselDiv.classList.add("carousel");

    let leftButtonDiv = document.createElement("div");
    leftButtonDiv.classList.add("left-button");
    leftButtonDiv.textContent = "<";
    carouselDiv.appendChild(leftButtonDiv);

    urlStrings.forEach(urlString => {
        let img = document.createElement("img");
        img.src = urlString;
        carouselDiv.appendChild(img);
    })

    let rightButtonDiv = document.createElement("div");
    rightButtonDiv.classList.add("right-button");
    rightButtonDiv.textContent = ">";
    carouselDiv.appendChild(rightButtonDiv);

    let carouselContainerDiv = document.querySelector(".carousel-container");

    carouselContainerDiv.appendChild(carouselDiv);

    return carouselDiv;

}

carouselMaker(imageData);

carouselImages = document.querySelectorAll(".carousel img");

currentCarouselImageIndex = 0;

carouselImages[currentCarouselImageIndex].style.display = "flex";

document.querySelector(".left-button").addEventListener("click", img => {
    carouselImages[currentCarouselImageIndex].style.display = "none";
    if (currentCarouselImageIndex === 0) {
        currentCarouselImageIndex = carouselImages.length - 1;
    } else {
        currentCarouselImageIndex--;
    }
    carouselImages[currentCarouselImageIndex].style.display = "flex";
})

document.querySelector(".right-button").addEventListener("click", img => {
    carouselImages[currentCarouselImageIndex].style.display = "none";
    if (currentCarouselImageIndex === carouselImages.length - 1) {
        currentCarouselImageIndex = 0;
    } else {
        currentCarouselImageIndex++;
    }
    carouselImages[currentCarouselImageIndex].style.display = "flex";
})