// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
  var lastCall, timeoutId;
  return function () {
    var now = new Date().getTime();
    if (lastCall && now < lastCall + interval) {
      // if we are inside the interval we remove
      // the existing timer and set up a new one
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        function () {
          lastCall = now;
          fn.call();
        },
        interval - (now - lastCall),
      );
    } else {
      // otherwise, we directly call the function
      lastCall = now;
      fn.call();
    }
  };
}

// Highlight currently scrolled to header in shortcuts
// Based on https://stackoverflow.com/a/32396543/214686
// and
// https://stackoverflow.com/a/57494988/214686
// which fixes some issues with the first, particularly
// around scrolling upward.
function scrollHeadersAndNavbar() {
  const scrollPosition = document.documentElement.scrollTop;
  const headers = Array.from(
    document.querySelectorAll(":is(h1, h2, h3, h4, h5, h6)[id]"),
  );
  const allShortcuts = Array.from(
    document.querySelectorAll("#shortcuts > div"),
  );

  //Navbar Clone
  const navbarClone = document.getElementById("navbar-clone");

  // Make navbar sticky, by activating a second, duplicate navbar
  // that is fixed to the top of the screen.
  navbarClone.classList.toggle("is-active", scrollPosition > 50);

  headers.map((currentSection) => {
    // get the position of the section
    // emulates JQuery's .position().top
    const marginTop = parseInt(getComputedStyle(currentSection).marginTop, 10);
    var sectionTop = currentSection.offsetTop - marginTop;
    var sectionHeight = currentSection.getBoundingClientRect().height;
    var overall = scrollPosition + sectionHeight;
    var headerOffset = remToPx(4);

    if (scrollPosition < headerOffset) {
      allShortcuts.map((shortcut) => shortcut.classList.remove("active"));
      return;
    }

    // user has scrolled over the top of the section
    if (
      scrollPosition + headerOffset >= sectionTop &&
      scrollPosition < overall
    ) {
      const id = currentSection.id;
      const shortcut = document.getElementById(`${id}-shortcut`);
      if (shortcut) {
        allShortcuts.map((shortcut) => shortcut.classList.remove("active"));
        shortcut.classList.add("active");
      }
    }
  });
}

const throttledScrollHeadersAndNavbar = throttle(scrollHeadersAndNavbar, 100);

function bindScroll() {
  window.addEventListener("scroll", throttledScrollHeadersAndNavbar);
}

function unbindScroll() {
  window.removeEventListener("scroll", throttledScrollHeadersAndNavbar);
}

function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function setupShortcuts(shortcutDepth = 2) {
  shortcutDepth += 1; // to account for the page title

  // Build a string like ".content-container h2, .content-container h3"
  let classes = "";
  for (let i = 2; i <= shortcutDepth; i++) {
    if (i != 2) {
      classes += ",";
    }
    classes += " .content-container h" + i;
  }

  // Content Page Shortcuts
  const shortcutsTarget = $("#shortcuts");
  if (shortcutsTarget.length > 0) {
    $(classes).map(function (idx, el) {
      const title = el.textContent;
      const elId = el.id;
      // Gets the element type (e.g. h2, h3)
      const elType = $(el).get(0).tagName;
      // Adds snake-case title as an id attribute to target element
      shortcutsTarget.append(
        `<div id="${elId}-shortcut" class="shortcuts-${elType}" href="#${elId}">${title}</div>`,
      );

      const shortcut = $(`#${elId}-shortcut`);
      shortcut.click(function () {
        // We don't want the shortcuts to flash through highlights while
        // we scroll to the desired header
        unbindScroll();

        // Replace what's in the location bar, without changing browser history
        // and without triggering a page scroll
        history.replaceState(null, null, `#${elId}`);

        let distance = $(`#${elId}`).offset().top - 60;
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: distance,
          },
          300,
          null,
          function () {
            $("#shortcuts > div").removeClass("active");
            shortcut.addClass("active");

            // Done moving to clicked header; re-enable
            // scroll highlighting of shortcuts
            bindScroll();
          },
        );
      });
    });
  }

  // Removes the shortcuts container if no shortcuts exist.
  // Also removes the 'Get Help' link.
  if ($("#shortcuts div").length < 1) {
    $(".shortcuts-container").css("display", "none");
  }

  bindScroll();
}
