
function submitData(firstName, email) {
    const contactObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email,
        })
    };
    return fetch("http://localhost:3000/users", contactObj)
    .then(res => res.json())
    .then(body => addNewContact(body.id))
    .catch(errorMessage) 
}

function addNewContact(id) {
    document.getElementsByTagName('body')[0].innerHTML = id;
}

function errorMessage(message) {
    document.getElementsByTagName('body')[0].innerHTML = message;
}    
 