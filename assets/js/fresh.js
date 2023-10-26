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

  //reveal elements on scroll so animations trigger the right way
  var $window = $(window),
    win_height_padded = $window.height() * 1.1;

  $window.on("scroll", revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop();
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this = $(this),
        offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data("timeout")) {
          window.setTimeout(
            function () {
              $this.addClass("animated " + $this.data("animation"));
            },
            parseInt($this.data("timeout"), 10),
          );
        } else {
          $this.addClass("animated " + $this.data("animation"));
        }
      }
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

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            550,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            },
          );
        }
      }
    });
}

if (document.readyState !== "loading") {
  whenReady();
} else {
  document.addEventListener("DOMContentLoaded", whenReady);
}
