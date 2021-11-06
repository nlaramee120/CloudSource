const logout = async () => {
    try {
        const res = await fetch('/api/employers/logout', {
            method: 'GET', 
            headers: {'Content-Type': 'application/json'},
        });
        console.log("logout");
        //IF RESPONSE OK, REDIRECT TO ROOT/HOME DIRECTORY
        if (res.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText);
            document.location.replace('/')
        }

    } catch (err) {
        alert("Failed to log out.");
    }
};

//TODO - ADD ID TO QUERY SELECTOR WHEN WE ADD LOGOUT BUTTOn
document.querySelector('#sign-out-button').addEventListener('click', logout);