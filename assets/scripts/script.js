const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

// Menu mobile
[ menuBtn, closeMenuBtn].forEach((btn) => {

    btn.addEventListener("click", (event) => {
        menu.classList.toggle("menu-active");
    });

});

// Scroll suave
function smoothScroll(event) {

    event.preventDefault();

    const href = this.getAttribute("href");

    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });

    setTimeout(() => {

        if(menu.classList.contains("menu-active")) {
            menu.classList.remove("menu-active");
        }

    }, 500);

}

allLinks.forEach((link) => {

    link.addEventListener("click", smoothScroll);

})