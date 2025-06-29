document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress-bar");
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
    progressBar.classList.add("active");
  }, 100);

  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.pointerEvents = "none";
  }, 1100);
});
