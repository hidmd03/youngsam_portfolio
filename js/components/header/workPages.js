// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  stickyBar();
  progressBar();
};

// Get the header
var stickyHeader = document.getElementById("header");
var bg = document.getElementById("slider");
var progressWrap = document.getElementById("pgWrap");

// Get the offset position of the navbar

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
var stickyBar = function() {
  var bgHeight = bg.clientHeight;

  if (window.pageYOffset > bgHeight) {
    stickyHeader.classList.add("sticky");
    progressWrap.classList.add("up");
  } else {
    stickyHeader.classList.remove("sticky");
    progressWrap.classList.remove("up");
  }
};

var onresize = function() {
  var width = document.body.clientWidth;
  if (width <= 767) {
    stickyBar();
  } else {
    stickyBar();
  }
};

window.addEventListener("resize", onresize);

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  var scrolled = (winScroll / height) * 100;
  document.getElementById("pgBar").style.width = scrolled + "%";
}

const header = () => {
  const burgerHandler = e => {
    const source =
      e.target.tagName == "button" ? e.target : e.target.closest("button");
    if (document.body.classList.contains("nav")) {
      document.body.classList.add("nonav");
      document.body.classList.remove("nav");
    } else {
      document.body.classList.remove("nonav");
      document.body.classList.add("nav");
    }
  };
  document
    .querySelector("button.burger")
    .addEventListener("click", burgerHandler);
};

const titleImage = () => {
  var titleBg = document.getElementById("sliderBg");
  // var bottomBg = document.getElementById("bottomImg");

  var url = titleBg.dataset.url;

  titleBg.style.backgroundImage = url;
  // bottomBg.style.backgroundImage = url;
};

header();
titleImage();
