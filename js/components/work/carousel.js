window.onload = function() {
  carousel();
};

var delta = 300;
var timer = null;

var v;
var n = 0;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

var step;
var width;
var cardWidth;
var carouselWidth;

const carousel = () => {
  width = document.body.clientWidth;
  cardWidth = document.querySelector(".card").clientWidth;
  carouselWidth =
    document.querySelector(".carousel").children.length * cardWidth;

  if (width > 1280) {
    v = 4;
    document.querySelector(".carousel").style.marginLeft = "0px";
    n = 0;
  } else if (width > 1080) {
    v = 3;
    document.querySelector(".carousel").style.marginLeft = "0px";
    n = 0;
  } else if (width > 600) {
    v = 2;
    document.querySelector(".carousel").style.marginLeft = "0px";
    n = 0;
  } else {
    v = 1;
    document.querySelector(".carousel").style.marginLeft = "0px";
    n = 0;
  }

  step = carouselWidth / (cardWidth * v);

  if (n === 0) {
    prevButton.classList.add("no");
    nextButton.classList.remove("no");
  }
};

const nextHandler = () => {
  nextButton.addEventListener("click", e => {
    n++;
    console.log(n);

    document.querySelector(".carousel").style.marginLeft =
      "-" + cardWidth * (n * v) + "px";

    if (n >= step - 1) {
      nextButton.classList.add("no");
    }

    if (n !== 0) {
      prevButton.classList.remove("no");
    }
  });
};

nextHandler();

const prevHandler = () => {
  prevButton.addEventListener("click", e => {
    n--;
    console.log(n);

    document.querySelector(".carousel").style.marginLeft =
      "-" + cardWidth * (n * v) + "px";

    if (n !== 0) {
      nextButton.classList.remove("no");
    } else {
      prevButton.classList.add("no");
      nextButton.classList.remove("no");
    }
  });
};

prevHandler();
window.addEventListener(
  "resize",
  function() {
    clearTimeout(timer);
    timer = setTimeout(carousel, delta);
  },
  false
);
