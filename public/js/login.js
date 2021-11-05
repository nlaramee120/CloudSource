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

//LOGIN HANDLER
const loginFormHandler = async (event, req, res) => {
    //PREVENT INPUTS FROM CLEARING ON SUBMIT/DEFAULT ACTION
    event.preventDefault();

    //GET VALUES FROM LOGIN FORM
    const email = document.querySelector('#log-in-email').value.trim();
    const password = document.querySelector('#log-in-password').value.trim(); 

    if (email && password) {
        //POST REQ TO API ENDPOINT
        const res = await fetch('/api/employers/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (res.ok) {
            document.location.replace('/');
            return;
        } else {
            alert("Incorrect Email or Password.");
        }
    }
};



// SIGNUP HANDLER
const signupFormHandler = async (event) => {
    //PREVENT DEFAULT ACTIOn
    event.preventDefault();
    
    //COLLECT VALS FROM SIGNUP FORM
    const first_name = document.querySelector('#sign-up-fname').value.trim();
    const last_name = document.querySelector('#sign-up-lname').value.trim();
    const company = document.querySelector('#sign-up-company').value.trim();
    const email = document.querySelector('#sign-up-email').value.trim();
    const password = document.querySelector('#sign-up-password').value.trim();

    if (first_name && last_name && company && email && password) {
        const res = await fetch('/api/employers', {
            method: 'POST',
            body: JSON.stringify({first_name, last_name, company, email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (res.ok) {
            document.location.replace('/build');
        } else {
            alert("Failed to create account. Please enter all forms.");
        }
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);

document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
