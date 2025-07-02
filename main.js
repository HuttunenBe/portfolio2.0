const overlay = document.querySelector(".overlay");
const backToTopButton = document.querySelector("#backToTopButton");
const closeButton = document.querySelector("#closeButton");
const modalButton = document.querySelector("#seeMoreButton");
const modeButton = document.querySelector("#modeButton");
const body = document.body;
const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
window.onscroll = function () {
    scrollFunction();
};
menuToggle.addEventListener("click", () => {
    
    mobileMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", mobileMenu.classList.contains("active"));
});
document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        mobileMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});
const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
const displayElement = () => {
    overlay.classList.toggle("hidden");
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
const darkModeOn = JSON.parse(localStorage.getItem("darkMode"));
if (darkModeOn) {
    document.body.classList.add("darkMode");
} else {
    document.body.classList.remove("darkMode");
}
backToTopButton.addEventListener("click", backToTop);
modalButton.addEventListener("click", displayElement);
closeButton.addEventListener("click", displayElement);
modeButton.addEventListener("click", toggleLightSwitch);
