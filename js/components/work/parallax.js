function parallax() {
  var $title = document.querySelector(".title");
  var yPos = window.pageYOffset;

  yPos = 1 - yPos / 300;

  var opacity = yPos;

  $title.style.opacity = opacity;
}

window.addEventListener("scroll", function() {
  parallax();
});
