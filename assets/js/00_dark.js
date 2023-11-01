/*******************************************************************************
 * Theme interaction
 */

var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * set the the body theme to the one specified by the user browser
 *
 * @param {event} e
 */
function autoTheme(e) {
  targetTheme = prefersDark.matches ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", targetTheme);
}

autoTheme();
prefersDark.onchange = autoTheme;
