const backToTopButton = document.querySelector(".back-to-top");
const nav = document.querySelector("nav");
const toggle = document.querySelectorAll(".toggle");
const closeIcon = document.querySelector(".close-icon");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
    closeIcon.classList.toggle("show");
  });
}

const links = document.querySelectorAll(".nav-link");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
    closeIcon.classList.remove("show");
  });
}

function backToTop() {
  if (window.scrollY >= 580) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", function () {
  backToTop();
});
