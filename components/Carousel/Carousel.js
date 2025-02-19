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

const carouselContainer = document.querySelector(".carousel-container");
const newCarousel = createCarousel();
carouselContainer.appendChild(newCarousel);

const images = document.querySelectorAll(".carousel img");
images[0].style.display = "block";
let currentIndex = 0;

function leftClick() {
  images[currentIndex].style.display = "none";
  if (currentIndex === 0) {
    images[images.length - 1].style.display = "block";
    currentIndex = images.length - 1;
  } else {
    images[currentIndex - 1].style.display = "block";
    currentIndex -= 1;
  }
}

function rightClick() {
  images[currentIndex].style.display = "none";
  if (currentIndex === images.length - 1) {
    images[0].style.display = "block";
    currentIndex = 0;
  } else {
    images[currentIndex + 1].style.display = "block";
    currentIndex += 1;
  }
}

function createCarousel() {
  // create elements
  const carousel = document.createElement("div");
  const left = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const right = document.createElement("div");

  // set classes
  carousel.classList.add("carousel");
  left.classList.add("left-button");
  right.classList.add("right-button");

  // set content
  left.textContent = "<";
  img1.src = "./assets/carousel/computer.jpeg";
  img2.src = "./assets/carousel/mountains.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";
  right.textContent = ">";

  // set structure
  carousel.appendChild(left);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(right);

  // click events for left/right buttons
  left.addEventListener("click", () => leftClick());
  right.addEventListener("click", () => rightClick());

  return carousel;
}
