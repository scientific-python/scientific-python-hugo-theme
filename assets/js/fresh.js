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

        const navbars = document.getElementsByClassName("navbar is-light");
        Array.prototype.map.call(navbars, (e) => {
          e.classList.toggle("is-dark-mobile");
        });
      });
    });
  }

  // Back to Top button behaviour
  var pxShow = 600;
  var scrollSpeed = 500;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= pxShow) {
      $("#backtotop").addClass("visible");
    } else {
      $("#backtotop").removeClass("visible");
    }
  });
  $("#backtotop a").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      scrollSpeed,
    );
    return false;
  });
}

if (document.readyState !== "loading") {
  whenReady();
} else {
  document.addEventListener("DOMContentLoaded", whenReady);
}
