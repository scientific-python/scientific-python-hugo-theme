window.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", ({ matches }) => {
    if (matches) {
      targetTheme = "dark";
    } else {
      targetTheme = "light";
    }
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
    localStorage.setItem("mode", targetTheme);
});
