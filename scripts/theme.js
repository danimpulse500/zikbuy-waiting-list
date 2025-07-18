// scripts/theme.js

// Apply stored theme on page load
document.addEventListener("DOMContentLoaded", function () {
  const storedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark-mode", storedTheme === "dark");
});

// Toggle and save theme
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
