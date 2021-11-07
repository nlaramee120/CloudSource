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
    const submitBtn = document.getElementById('btn')

    let valid = false;
    let validArr = [];

    if (document.getElementById('html').checked) {
        valid = true;
        validArr.push(html);
    }
    
    if (document.getElementById('css').checked) {
        valid = true;
        validArr.push(css);
    }
    
    if (document.getElementById('js').checked) {
        valid = true;
        validArr.push(js);
    }
    
    if (document.getElementById('ts').checked) {
        valid = true;
        validArr.push(ts);
    }
    
    if (document.getElementById('react').checked) {
        valid = true;
        validArr.push(react);
    }
    
    if (document.getElementById('python').checked) {
        valid = true;
        validArr.push(python);
    }
    
    if (document.getElementById('java').checked) {
        valid = true;
        validArr.push(java);
    }
    
    if (document.getElementById('node').checked) {
        valid = true;
        validArr.push(node);
    }
    
    if (document.getElementById('sql').checked) {
        valid = true;
        validArr.push(sql);
    }
    
    if (document.getElementById('php').checked) {
        valid = true;
        validArr.push(php);
    }
    
    if (document.getElementById('cpp').checked) {
        valid = true;
        validArr.push(cpp);
    }

    if (valid) {
        console.log("array: " + validArr);
        alert('validated');

        return fetch(`api/developers/filter/${validArr.join("&")}`, {
            method: "GET"
        })
        .then(function (data) {
            console.log(data.json());
        })

    } else {
        alert('pick something');
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