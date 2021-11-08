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
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('css').checked) {
        valid = true;
        validArr.push(css);
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('js').checked) {
        valid = true;
        validArr.push(js);
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('ts').checked) {
        valid = true;
        validArr.push(ts);
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('react').checked) {
        valid = true;
        validArr.push(react);
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('python').checked) {
        valid = true;
        validArr.push(python);
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('java').checked) {
        valid = true;
        validArr.push(java);
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('node').checked) {
        valid = true;
        validArr.push(node);
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('sql').checked) {
        valid = true;
        validArr.push(sql);
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('php').checked) {
        valid = true;
        validArr.push(php);
    } else {
        //DO NOTHING
    }
    
    if (document.getElementById('cpp').checked) {
        valid = true;
        validArr.push(cpp);
    } else {
        //DO NOTHING
    }

    if (valid) {
        console.log("array: " + validArr);
        alert('validated');

        return fetch(`api/developers/filter/${validArr.join("&")}`, {
            method: "GET"
        })
        .then(function (response) {
            return response.json();
          })
        .then(function (data) {
            console.log(data);

            $(".card").empty();

            var newCard = $("<div>").attr("class", "card");

            $(".filteredEmps").append(newCard)

            for (i = 0; i < data.length; i++) {
                var newCardBody = $("<div>").attr("class", "card-body");
                $(".card").append(newCardBody)
                
                let name = data[i].first_name + " " + data[i].last_name;
                console.log(name)
                newCardBody.append("<h3 class='card-title'>" + name + "<h3>")

                let email = data[i].email;
                newCardBody.append("<p class='card-text'>" + email + "<p>");
                
            }
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