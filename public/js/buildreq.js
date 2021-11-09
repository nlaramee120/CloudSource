//HANDLE REQ FORM 
const handleReq = (event) => {
    //PREVENT FORMS FROM CLEARING ON SUBMIT
    event.preventDefault();

    //COLLECT VALUE OF TEXT INPUT FORMS TO VALIDATE
    const comp = document.querySelector('#request-company-name').value.trim();
    const title = document.querySelector('#request-title').value.trim();
    const desc = document.querySelector('#request-description').value.trim();
    
    //CREATE ARRAY OF FORM INPUT'S IDS
    let techVal = [
        "html",
        "css",
        "js",
        "ts",
        "react",
        "python",
        "java",
        "node",
        "sql",
        "php",
        "cpp"
    ];

    //DECLARE OBJECT W/ KEYVALUE PAIRS MATCHING CHECKBOX ID TO DATABASE INPUT
    let techValMapping = {
        "html": "HTML",
        "css": "CSS",
        "js": "JavaScript",
        "ts": "TypeScript",
        "react": "React",
        "python": "Python",
        "java": "Java",
        "node": "NodeJS",
        "sql": "MySQL",
        "php": "PHP",
        "cpp": "C++"
    };

    //CREATE EMPTY ARRAY TO STORE CHECKED INPUTS
    let checkedArr = [];
    
    //LOOP LENGTH OF TECHVAL ARRAY
    for (let i = 0; i < techVal.length; i++) {
        //GET ELEMENT BY ID BY REFERENCING TECHVAL ARRAY
        //IF ANY INDEX IS CHECKED/SELECTED, PUSH TO EMPTY CHECKEDARR
        if (document.getElementById(techVal[i]).checked) {
            //FIND CHECKBOX/TECHVAL ID AS KEY IN MAPPING ARRAY AND PUSH RESULT TO CHECKED ARRAY
            checkedArr.push(techValMapping[techVal[i]]);
        }
    };

    //IF NO USER INPUT ON ANY FORM, REJECT SUBMIT AND END SCRIPT
    if (!comp || !title || !desc || checkedArr.length <= 0) {
        alert('Please enter all forms.');
        return;
    }



    //IF ARRAY OF CHECKED INPUTS IS > 0, HIT API AND RETURN DEVELOPERS
    if (checkedArr.length > 0) {
        return fetch(`api/developers/filter/${checkedArr.join("&")}`, {
            method: "GET"
        })
        .then(function (response) {
            return response.json();
          })
        .then(function (data) {
            console.log(data);

            $('.card').remove();

            var newCard = $("<div>").attr("class", "card");


            $(".filteredEmps").append(newCard)

            if(data.length <= 0) {

                alert("No developers found.");
                return
            
            } else {
                for (i = 0; i < data.length; i++) {
                    var newCardBody = $("<div>").attr("class", "card-body");
                    $(".card").append(newCardBody)
                    
                    let name = data[i].first_name + " " + data[i].last_name;
                    console.log(name)
                    newCardBody.append("<h3 class='card-title'>" + name + "<h3>")


                    let email = data[i].email;
                    newCardBody.append("<p class='card-text'>" + email + "<p>");


                let skills = data[i].skills;
                newCardBody.append("<p class='card-text'>" + skills + "<p>");

                newCardBody.append("<a class='btn btn-primary btn-dlock mt-4 generateBtn'>Add to my Profile</a>")

                   
                }

            }
        // }
        })
    } else {
        //OTHERWISE FORCE USER TO SELECT SOMETHING
        alert('Must select at least one tech.');
        return false;
    }
};

//ADD EVENT LISTENER TO BUILD REQUEST FORM SUBMIT BUTTON
//TRY/CATCH TO PREVENT CONSOLE ERRORS IF USER IS ON A DIFFERENT ROUTE, PREVENTING QUERY SELECTOR FROM FINDING ID
try {
document
        .querySelector('#request-form')
        .addEventListener('submit', handleReq);
} catch (err) {
    //IF NOT ABLE TO FIND QUERYSELECTOR, DON'T USE IT.
};