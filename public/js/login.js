//LOGIN HANDLER
const loginFormHandler = async (event, req, res) => {
    //PREVENT INPUTS FROM CLEARING ON SUBMIT/DEFAULT ACTION
    event.preventDefault();

    //GET VALUES FROM LOGIN FORM
    const email = document.querySelector('#log-in-email').value.trim();
    const password = document.querySelector('#log-in-password').value.trim(); 

    //VALIDATE LOGIN INPUTS
    if (!email || !password) {
        alert('Please enter all forms.');
        return;
    } else if (!email.includes('@') && ".com") {
        alert('Please enter a valid email.');
        return;
    }

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
            return;
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
        } else if (!email.includes('@') && ".com") {
            alert('Please enter a valid email.');
            return;
        } else {
            alert("Failed to create account. Please enter all forms.");
            return;
        }
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);

document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
