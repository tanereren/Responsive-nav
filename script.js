const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav__list");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
