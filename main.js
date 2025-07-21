const overlay = document.querySelector(".overlay");
const backToTopButton = document.querySelector("#backToTopButton");
const modalButton = document.querySelector("#seeMoreButton");
const closeButton = document.querySelector("#modalCloseButton");
const mobileMenuCloseButton = document.querySelector("#mobileMenuCloseButton");
const modeButton = document.querySelector("#toggleModeButton");
const menuToggle = document.querySelector("#mobileMenuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
const revealElements = document.querySelectorAll(".reveal");

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
const displayElement = () => {
  const isHidden = overlay.classList.toggle("hidden");
  if (!isHidden) {
    document.body.classList.add("modalOpen");
  } else {
    document.body.classList.remove("modalOpen");
  }
};

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
const toggleLightSwitch = () => {
  document.body.classList.toggle("darkMode");
  const currentMode = document.body.classList.contains("darkMode");
  localStorage.setItem("darkMode", JSON.stringify(currentMode));
};

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const boxTop = element.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      element.classList.add("visible");
    }
  });
};

const darkModeOn = JSON.parse(localStorage.getItem("darkMode"));
if (darkModeOn) {
  document.body.classList.add("darkMode");
} else {
  document.body.classList.remove("darkMode");
}

window.onscroll = function () {
  scrollFunction();
};
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuToggle.setAttribute(
    "aria-expanded",
    mobileMenu.classList.contains("active")
  );
});

document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    mobileMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

mobileMenuCloseButton.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
});

backToTopButton.addEventListener("click", backToTop);
modalButton.addEventListener("click", displayElement);
closeButton.addEventListener("click", displayElement);
modeButton.addEventListener("click", toggleLightSwitch);
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
