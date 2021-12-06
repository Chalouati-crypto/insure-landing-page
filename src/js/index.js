import "../sass/index.scss";
import "tailwindcss/tailwind.css";
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeHamburgerBtn = document.querySelector(".close-menu");
const hamburgermenu = document.querySelector(".hamburger-menu");
const wrapper = document.querySelector(".wrapper");

hamburgerBtn.addEventListener("click", () => {
  hamburgermenu.classList.remove("hidden");
  wrapper.classList.add("hidden");
});
closeHamburgerBtn.addEventListener("click", () => {
  hamburgermenu.classList.add("hidden");
  wrapper.classList.remove("hidden");
});
