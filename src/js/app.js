const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu-visible");

    if (navMenu.classList.contains("nav__menu-visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");

    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});