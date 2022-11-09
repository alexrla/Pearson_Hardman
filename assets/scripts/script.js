const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// Menu mobile
[ menuBtn, closeMenuBtn].forEach((btn) => {

    btn.addEventListener("click", (event) => {
        menu.classList.toggle("menu-active");
    });

});