const hamburger = document.querySelector('.login-hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

console.log("for the love of fuck");
// hamburger.addEventListener('click', mobileMenu);
navLink.forEach(n => n.addEventListener('click', closeMenu));
function mobileMenu() {
    // hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    // hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// window.onclick = () => {
//     console.log('please god');
//     closeMenu();
// }