let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let deskMenu = document.querySelector("#menu-btn");
let deskNavbar = document.querySelector(".navbar");

deskMenu.onclick = () =>{
    deskMenu.classList.toggle("fa-times")
    deskNavbar.classList.toggle("active")
};

window.onscroll = () =>{
    deskMenu.classList.remove("fa-times")
    deskNavbar.classList.remove("active")
};

//HANDLERS FOR OPENING/CLOSING MOBILE HAMBURGER MENUS
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};

window.onclick = (event) => {
    if (event.target !== menu && event.target !== navbar) {
        menu.classList.remove('active');
        navbar.classList.remove('active');
    }
};

//HANDLE REQ FORM 
const handleReq = (event) => {
    event.preventDefault();
    console.log('testing req');
}

try {
    document
        .querySelector('#request-form')
        .addEventListener('submit', handleReq);
} catch (err) {
    //IF NOT ABLE TO FIND QUERYSELECTOR, DON'T USE IT.
};