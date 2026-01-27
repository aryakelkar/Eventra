const logo = document.getElementById("logo");
const splash = document.getElementById("splash");
const main = document.getElementById("main");

// 1. White screen for 2 seconds
setTimeout(() => {
  logo.classList.add("merge");
}, 2000);

// 2. Maximize EVENTRA
setTimeout(() => {
  logo.classList.add("maximize");
}, 3500);

// 3. Go to second page
setTimeout(() => {
  splash.style.display = "none";
  main.style.display = "flex";
}, 4800);
