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

  const loadHandler = e => {
    if (!loadEventFired) {
      setTimeout(() => {
        document.querySelector(".hello").classList.remove("hidden");
      }, 500);
      setTimeout(() => {
        document.querySelector(".contact.first").classList.remove("hidden");
      }, 1000);
      setTimeout(() => {
        document.querySelector(".contact.second").classList.remove("hidden");
      }, 1500);
      loadEventFired = true;
    }
  };

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
