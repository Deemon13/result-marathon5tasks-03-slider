const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");
const slides = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slides - 1) * 100}vh`;

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex += 1;
    if (activeSlideIndex === slides) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex -= 1;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slides - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});
