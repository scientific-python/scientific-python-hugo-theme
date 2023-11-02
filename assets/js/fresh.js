function whenReady() {
  //Mobile menu toggle
  const burgers = document.getElementsByClassName("navbar-burger");
  if (burgers) {
    Array.prototype.map.call(burgers, (burger) => {
      burger.addEventListener("click", () => {
        burger.classList.toggle("is-active");

        const menu_id = burger.getAttribute("data-target");
        const menu = document.getElementById(menu_id);
        menu.classList.toggle("is-active");
      });
    });
  }

  // Back to Top button behaviour
  const pxShow = 600;
  var timer = null;
  const backToTop = document.getElementById("backtotop");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;

    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() =>
      backToTop.classList.toggle("visible", scrollTop >= pxShow),
    );
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  });
}

if (document.readyState !== "loading") {
  whenReady();
} else {
  document.addEventListener("DOMContentLoaded", whenReady);
}
