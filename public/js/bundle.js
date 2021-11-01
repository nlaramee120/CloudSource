(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
exports.validate = function(email)
{
	if (!email)
		return false;
		
	if(email.length>254)
		return false;

	var valid = tester.test(email);
	if(!valid)
		return false;

	// Further checking of some things regex can't handle
	var parts = email.split("@");
	if(parts[0].length>64)
		return false;

	var domainParts = parts[1].split(".");
	if(domainParts.some(function(part) { return part.length>63; }))
		return false;

	return true;
}
},{}],2:[function(require,module,exports){
//INPUT FORM VALIDATION
let emailValidator = require('email-validator');

//TODO- FIX THE FUCKIN EMAIL VAL PACKAGE
async function validateSignUp(event) {
    event.preventDefault();

    let fname = document.forms["signUp"]["fname"].value;
    let lname = document.forms["signUp"]["lname"].value;
    let email = document.forms["signUp"]["email"].value;
    let pwd = document.forms["signUp"]["pwd"].value;
    
    if (!fname || !lname || !pwd || !emailValidator.validate(email)) {
        alert("fill out ya damn name");
        return false;
    }
}


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

},{"email-validator":1}]},{},[2]);
