const menu = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");
const deskMenu = document.querySelector("#menu-btn");
const deskNavbar = document.querySelector(".navbar");
const submitBtn = document.getElementById('btn');
const burger = document.querySelector('.hamburger');
const bar = document.querySelectorAll('.bars');

deskMenu.onclick = () =>{
    deskMenu.classList.toggle("fa-times");
    deskNavbar.classList.toggle("active");
};

window.onscroll = () =>{
    deskMenu.classList.remove("fa-times");
    deskNavbar.classList.remove("active");
};

//HANDLERS FOR OPENING/CLOSING MOBILE HAMBURGER MENUS
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

//CLOSE MOBILE NAV ON PAGE SCROLL
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};

//CLOSE MOBILE NAV IF USER CLICKS ANYWHERE OUTSIDE OF NAV
window.onclick = (event) => {
    if (event.target !== menu && event.target !== navbar) {
        menu.classList.remove('active');
        navbar.classList.remove('active');
    }
};
