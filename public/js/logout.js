const logout  = async () => {
    const res = await fetch('/api/users/logout', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
    });

    //IF RESPONSE OK, REDIRECT TO ROOT/HOME DIRECTORY
    if (res.ok) {
        document.location.replace('/');
    } else {
        alert(res.statusText);
    }
};

//TODO - ADD ID TO QUERY SELECTOR WHEN WE ADD LOGOUT BUTTOn
document.querySelector('#').addEventListener('click', logout);