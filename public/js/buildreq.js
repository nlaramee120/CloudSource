//HANDLE REQ FORM 
const handleReq = (event) => {
    //PREVENT FORMS FROM CLEARING ON SUBMIT
    event.preventDefault();
    
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

    //CREATE EMPTY ARRAY TO STORE CHECKED INPUTS
    let checkedArr = [];
    
    //LOOP LENGTH OF TECHVAL ARRAY
    for (let i = 0; i < techVal.length; i++) {
        //IF ANY INDEX IS CHECKED/SELECTED, PUSH TO EMPTY CHECKEDARR
        if (document.getElementById(techVal[i]).checked) {
            checkedArr.push(techVal[i]);
        }
    };

    //IF ARRAY OF CHECKED INPUTS IS > 0, HIT API AND RETURN DEVELOPERS
    if (checkedArr.length > 0) {
        // console.log("array: " + checkedArr);
        return fetch(`api/developers/filter/${checkedArr.join("&")}`, {
            method: "GET"
        })
        .then(function (data) {
            console.log(data.json());
        });

    } else {
        //OTHERWISE FORCE USER TO SELECT SOMETHING
        alert('Must Select At Least One Tech.');
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