
document.addEventListener("DOMContentLoaded", function() {
  const themeButton = document.getElementById("themeButton");
  const body = document.body;
  const themeIcon = document.getElementById("js-theme-mode-icon");

  themeButton.addEventListener("click", function() {
    // Toggle between dark and light themes
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      themeIcon.src = "assets/img/icons/sun.svg"; 
    } else {
      body.classList.add("dark-theme");
      themeIcon.src = "assets/img/icons/moon.svg"; 
    }
  });
});
