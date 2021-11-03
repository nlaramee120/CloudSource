let deskMenu = document.querySelector("#menu-btn")
let deskNavbar = document.querySelector(".navbar")


deskMenu.onclick = () =>{
    deskMenu.classList.toggle("fa-times")
    deskNavbar.classList.toggle("active")
}


window.onscroll = () =>{
    deskMenu.classList.remove("fa-times")
    deskNavbar.classList.remove("active")
}
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

    // if (email && password) {
        //POST REQ TO API ENDPOINT
        const res = await fetch('/api/employers/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (res.ok) {
            //TODO - CHOOSE WHAT PAGE TO REDIRECT TO IF LOGIN RESPONSE OK
            document.location.replace('/build');
            console.log("response ok", res.ok)
        } else {
            alert(res.statusText);
        }
    // }
};

//SIGNUP HANDLER
// const signupFormHandler = async (event) => {
//     //PREVENT DEFAULT ACTIOn
//     event.preventDefault();
    
//     //COLLECT VALS FROM SIGNUP FORM
//     const first_name = document.querySelector('#sign-up-fname').value.trim();
//     const last_name = document.querySelector('#sign-up-lname').value.trim();
//     const email = document.querySelector('#sign-up-email').value.trim();
//     const password = document.querySelector('#sign-up-password').value.trim();
//     // const com = document.querySelector('#sign-up-company').value.trim();
//     console.log(first_name, last_name, email, password);
//     //TODO - CHOOSE WHERE TO REDIRECT IF SIGN UP RES OK
//     if (first_name && last_name && email && password) {
//         const res = await fetch('/api/employers', {
//             method: 'POST',
//             body: JSON.stringify({first_name, last_name, email, password}),
//             headers: {'Content-Type': 'application/json'},
//         });
//         // debugger

//         if (res.ok) {
//             document.location.replace('/');
//         } else {
//             alert(res.statusText);
//         }
//     }
// };

// document
//     .querySelector('#signup-form')
//     .addEventListener('submit', signupFormHandler);

document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
