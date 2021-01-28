
if(!localStorage.getItem('token')){
    console.log('Hello');

    fetch('https://api-slack-token-dl.herokuapp.com')
    .then(response => response.json())
    .then(data =>{
    localStorage.setItem('token', data.token);

});
}

let auth = `Bearer ${localStorage.getItem('token')}`;
document.getElementById('submit').addEventListener('click', () =>{

    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let txt = `Veuillez répondre à ${email}\n${message}`; 
    
    /* `` Littéraux de gabarits : 
    * Les gabarits sont délimités par des caractères accent grave (` `)  au lieu des apostrophes doubles ou simples.
    * Les gabarits peuvent contenir des espaces réservés (placeholders).
    * Ces espaces sont indiqués par le signe dollar ($) et des accolades (${expression}). 
    * */

    

    fetch ('https://slack.com/api/chat.postMessage',{
        method: 'POST',
        headers: new Headers({
            'Content-type': 'application/json',
            'Authorization': auth
        }),
        body: JSON.stringify({channel: "C01LHPY8EGZ", text: txt})

    });
})
