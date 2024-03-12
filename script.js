// Accepting user input from an alert window and displaying it on the page.


let username1;

username1 = window.prompt(`What is your first username??`);
document.getElementById(`h1`).textContent= `Hello there ${username1}!!`

console.log(`Hello there ${username1}!! This is your first username.`);


//Accepting user input from a text box and displaying it on the page

let username2;

document.getElementById(`submitbtn`).onclick = function(){
    username2 = document.getElementById(`username2`).value;
    document.getElementById(`h2`).textContent= `Hello there ${username2} this is your alternative username`;
}


