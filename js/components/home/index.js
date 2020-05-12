var loadEventFired = false;

const animation = () => {
  var sections = document.querySelectorAll("section");
  var inTransition = false;
  const hideAllSections = () => {
    sections.forEach(section => {
      section.classList.add("hidden");
    });
  };

  const scrollHandler = e => {
    const hiddenSections = document.querySelectorAll("section.hidden");
    if (inTransition) return;
    for (var i = 0; i < hiddenSections.length; i++) {
      if (isElementInViewport(hiddenSections[i])) {
        setTimeout(
          section => {
            inTransition = true;
            section.classList.remove("hidden");
          },
          (1 + i) * 250,
          hiddenSections[i]
        );
        setTimeout(() => (inTransition = false), i * 300 + 250);
      }
    }
  };

  var body = document.querySelector("body");

  const loadHandler = e => {
    if (!loadEventFired) {
      if (body.classList.contains("dark")) {
        setTimeout(() => {
          document.querySelector(".hello").classList.remove("hidden");
        }, 500);
        setTimeout(() => {
          document.querySelector(".work").classList.remove("hidden");
        }, 1000);
      } else {
        setTimeout(() => {
          document.querySelector(".summary").classList.remove("hidden");
        }, 500);
        setTimeout(() => {
          document.querySelector(".intro").classList.remove("hidden");
        }, 1000);
      }

      loadEventFired = true;
    }
  };

  const workImage = () => {
    var images = document.querySelectorAll(".title-media .img");

    for (var i = 0; i < images.length; i++) {
      images[i].style.backgroundImage = "url(" + images[i].dataset.url + ")";
    }
  };

  workImage();
  return {
    Init: () => {
      window.addEventListener("scroll", scrollHandler);
      window.addEventListener("load", loadHandler);
      hideAllSections();
      window.triggerLoad = loadHandler;
    }
  };
};
animation().Init();
