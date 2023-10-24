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
  document.documentElement.dataset.theme = targetTheme;
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
  localStorage.setItem("mode", targetTheme);
}


targetTheme = prefersDark.matches ? "dark" : "light";
document.documentElement.dataset.theme = targetTheme;
document.documentElement.setAttribute("data-theme", targetTheme);
localStorage.setItem("theme", targetTheme);
localStorage.setItem("mode", targetTheme);
prefersDark.onchange = autoTheme
