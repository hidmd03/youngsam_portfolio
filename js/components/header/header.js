const header = () => {
  const header = document.querySelector("header");
  var lastScrollPosition = 0;
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
  const scrollHandler = e => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const computedStyle = getComputedStyle(header);
    var scrollDirectionDown = true;

    if (scrollTop != lastScrollPosition) {
      scrollDirectionDown = scrollTop > lastScrollPosition;
    }

    var headerTriggerPoint = scrollDirectionDown ? header.scrollHeight : 0;
    if (scrollTop > headerTriggerPoint) {
      if (header.classList.contains("offscreen")) {
        if (scrollDirectionDown) {
          header.classList.add("inactive");
          header.classList.remove("active");
        } else {
          header.classList.remove("inactive");
          header.classList.add("active");
        }
      }
      header.classList.add("offscreen");
    } else {
      header.classList.remove("offscreen");
      header.classList.remove("inactive");
      header.classList.remove("active");
    }

    lastScrollPosition = scrollTop;
  };
  window.addEventListener("scroll", scrollHandler);
  document
    .querySelector("button.burger")
    .addEventListener("click", burgerHandler);
  scrollHandler();
  setTimeout(scrollHandler, 250);
};

header();
