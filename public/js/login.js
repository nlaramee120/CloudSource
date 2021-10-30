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
    .querySelector('.sign-up-hero')
    .addEventListener('submit', signupFormHandler);

document
    .querySelector('.log-in-hero')
    .addEventListener('submit', loginFormHandler);