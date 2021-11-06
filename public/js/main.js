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
const handleReq = (event, input) => {
    //prevent default action
    event.preventDefault();
    
    const html = document.getElementById('html').value.trim();
    const css = document.getElementById('css').value.trim();
    const js = document.getElementById('js').value.trim();
    const ts = document.getElementById('ts').value.trim();
    const react = document.getElementById('react').value.trim();
    const python = document.getElementById('python').value.trim();
    const java = document.getElementById('java').value.trim();
    const node = document.getElementById('node').value.trim();
    const sql = document.getElementById('sql').value.trim();
    const php = document.getElementById('php').value.trim();
    const cpp = document.getElementById('cpp').value.trim();

    let valid = false;
    let validArr = [];

    if (document.getElementById('html').checked) {
        valid = true;
        validArr.push(html);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('css').checked) {
        valid = true;
        validArr.push(css);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('js').checked) {
        valid = true;
        validArr.push(js);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('ts').checked) {
        valid = true;
        validArr.push(ts);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('react').checked) {
        valid = true;
        validArr.push(react);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('python').checked) {
        valid = true;
        validArr.push(python);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('java').checked) {
        valid = true;
        validArr.push(java);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('node').checked) {
        valid = true;
        validArr.push(node);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('sql').checked) {
        valid = true;
        validArr.push(sql);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('php').checked) {
        valid = true;
        validArr.push(php);
    } else {
        console.log('check something');
    }
    
    if (document.getElementById('cpp').checked) {
        valid = true;
        validArr.push(cpp);
    } else {
        console.log('check something');
    }

    if (valid) {
        console.log("array: " + validArr);
        alert('validated');
    } else {
        alert('pick');
        return false;
    }
}

try {
    document
        .querySelector('#request-form')
        .addEventListener('submit', handleReq);
} catch (err) {
    //IF NOT ABLE TO FIND QUERYSELECTOR, DON'T USE IT.
};