// The shortcuts list highlights the entry for the last heading at or above the top of the
// viewport (below the sticky header), or the last entry when the page is scrolled to the bottom.
// A clicked entry stays highlighted until the reader scrolls by hand, because a short page may not
// bring its heading to the top.
let shortcutEntries = []; // { shortcut, target } in document order
let activeEntry = null;
let pinnedEntry = null;

function activate(entry) {
  if (entry === activeEntry) return;
  activeEntry?.shortcut.classList.remove("active");
  activeEntry = entry;
  entry?.shortcut.classList.add("active");
}

function updateShortcuts() {
  if (pinnedEntry) return activate(pinnedEntry);

  const atBottom =
    window.scrollY > 0 &&
    window.innerHeight + Math.round(window.scrollY) >=
      document.documentElement.scrollHeight;
  if (atBottom) return activate(shortcutEntries[shortcutEntries.length - 1]);

  // A jump to a heading leaves it at `scroll-padding-top`, give or take a pixel.
  const top =
    parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) ||
    0;
  let found = null;
  for (const entry of shortcutEntries) {
    // Skip headings that are not rendered, e.g. inside a closed <details>.
    if (!entry.target.getClientRects().length) continue;
    if (entry.target.getBoundingClientRect().top > top + 4) break;
    found = entry;
  }
  activate(found);
}

// Follow the URL fragment (back/forward, in-page links); a fragment that is not a shortcut
// releases the pin.
function syncShortcutsToHash() {
  const target = document.querySelector(":target");
  pinnedEntry = shortcutEntries.find((e) => e.target === target) ?? null;
  updateShortcuts();
}

function setupShortcuts(shortcutDepth = 2) {
  // Find the shortcut target container in the sidebar
  const shortcutsTarget = document.getElementById("shortcuts");

  /*
   * Exit early if shortcuts container doesn't exist
   * This is important to avoid errors when the theme
   * is used on pages that don't have the shortcuts sidebar
   */
  if (!shortcutsTarget) {
    return;
  }

  shortcutDepth += 1; // to account for the page title

  // Build a class selector for each header level
  let classes = "";
  for (let i = 2; i <= shortcutDepth; i++) {
    if (i != 2) {
      classes += ",";
    }
    classes += `.content-container > h${i}`;
  }

  const classElements = Array.from(document.querySelectorAll(classes));

  // Only proceed if we found headers (to avoid creating an empty shortcuts section)
  if (classElements.length > 0) {
    classElements.map((el) => {
      if (!el.id) {
        return;
      }

      const title = el.innerHTML;
      const elId = el.id;
      // Gets the element type (e.g. h2, h3)
      const elType = el.tagName;
      // Adds snake-case title as an id attribute to target element
      shortcutsTarget.insertAdjacentHTML(
        "beforeend",
        `<div id="${elId}-shortcut" class="shortcuts-${elType}" href="#${elId}">${title}</div>`,
      );

      const shortcut = document.getElementById(`${elId}-shortcut`);
      const entry = { shortcut, target: el };
      shortcutEntries.push(entry);

      shortcut.addEventListener("click", (event) => {
        event.preventDefault();

        // Replace what's in the location bar, without changing browser history
        // and without triggering a page scroll
        history.replaceState(null, null, `#${elId}`);
        pinnedEntry = entry;
        updateShortcuts();
        el.scrollIntoView();
      });
    });
  }

  // Removes the shortcuts container if no shortcuts exist.
  // Also removes the 'Get Help' link.
  const shortcuts = Array.from(
    document.querySelectorAll("#shortcuts div:not(#shortcuts-header)"),
  );
  const shortcutsContainer = document.getElementById("shortcuts-container");

  if (shortcutsContainer) {
    if (shortcuts.length == 0) {
      shortcutsContainer.style.display = "none";
    } else {
      shortcutsContainer.style.display = ""; // make shortcuts display visible, if hidden
    }
  }

  if (shortcutEntries.length == 0) {
    return;
  }

  // Scrolling by hand releases the pin.
  for (const type of ["wheel", "touchmove", "keydown", "pointerdown"]) {
    window.addEventListener(
      type,
      () => {
        pinnedEntry = null;
      },
      { passive: true },
    );
  }
  window.addEventListener("scroll", updateShortcuts, { passive: true });
  window.addEventListener("resize", updateShortcuts);
  window.addEventListener("hashchange", syncShortcutsToHash);
  syncShortcutsToHash();
}
