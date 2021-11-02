<<<<<<< HEAD
let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}
=======
//INPUT FORM VALIDATION

//TODO- FIX THE FUCKIN EMAIL VAL PACKAGE
// async function validateSignUp(event) {
//     event.preventDefault();

//     let fname = document.forms["signUp"]["fname"].value;
//     let lname = document.forms["signUp"]["lname"].value;
//     let email = document.forms["signUp"]["email"].value;
//     let pwd = document.forms["signUp"]["pwd"].value;
    
//     if (!fname || !lname || !pwd || !emailValidator.validate(email)) {
//         alert("fill out ya damn name");
//         return false;
//     }
// }


//LOGIN HANDLER
const loginFormHandler = async (event) => {
    //PREVENT INPUTS FROM CLEARING ON SUBMIT/DEFAULT ACTION
    event.preventDefault();

    //GET VALUES FROM LOGIN FORM
    const email = document.querySelector('#log-in-email').value.trim();
    const password = document.querySelector('#log-in-password').value.trim();

    if (email && password) {
        //POST REQ TO API ENDPOINT
        const res = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (res.ok) {
            //TODO - CHOOSE WHAT PAGE TO REDIRECT TO IF LOGIN RESPONSE OK
            document.location.replace('/????');
        } else {
            alert(res.statusText);
        }
    }
};

//SIGNUP HANDLER
const signupFormHandler = async (event) => {
    //PREVENT DEFAULT ACTIOn
    event.preventDefault();

    //COLLECT VALS FROM SIGNUP FORM
    const fname = document.querySelector('#sign-up-fname').value.trim();
    const lname = document.querySelector('#sign-up-lname').value.trim();
    const email = document.querySelector('#sign-up-email');
    const pwd = document.querySelector('#sign-up-password');

    //TODO - CHOOSE WHERE TO REDIRECT IF SIGN UP RES OK
    if (fname && lname && email && pwd) {
        const res = await fetch('/api/???', {
            method: 'POST',
            body: JSON.stringify({fname, lname, email, pwd}),
            headers: {'Content-Type': 'application/json'},
        });

        if (res.ok) {
            document.location.replace('/profile');
        } else {
            alert(res.statusText);
        }
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);

document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
>>>>>>> develop
