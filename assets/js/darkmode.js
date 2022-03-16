const key = "scientific-python-dark-mode";

function getDarkMode() {
  return localStorage.getItem(key) === "true";
}

function setDarkMode(darkMode) {
  localStorage.setItem(key, darkMode ? "true" : "false");
}

function syncDarkMode() {
  const darkMode = getDarkMode();

  // Sync checkbox with local storage
  const slider = document.getElementById('dark-mode');
  slider.checked = darkMode;

  // Apply darkMode styles
  const body = document.body;
  if (darkMode) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}

function toggleDarkMode() {
  const slider = document.getElementById('dark-mode');
  setDarkMode(slider.checked);
  syncDarkMode();
}

document.addEventListener("DOMContentLoaded", function() {
  syncDarkMode();
});
