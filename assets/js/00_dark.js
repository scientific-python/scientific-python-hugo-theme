/*******************************************************************************
 * Theme interaction
 */

var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * set the the body theme to the one specified by the user browser
 *
 * @param {event} e
 */
function setTheme() {
  /* One of auto, light, or dark, depending on what the site wants to support */
  const themeScheme = document.documentElement.getAttribute("data-colorscheme");

  const browserScheme = prefersDark.matches ? "dark" : "light";

  // Use the color scheme from the configuration file, if set
  document.documentElement.setAttribute(
    "data-theme",
    themeScheme == "auto" ? browserScheme : themeScheme,
  );
}

setTheme();
prefersDark.onchange = setTheme;
