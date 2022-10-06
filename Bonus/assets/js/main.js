let userName = prompt('quale è il tuo nome?');
console.log(userName);

let userLastName = prompt('quale è il tuo cognome?');
console.log(userLastName);

let userColor = prompt('quale è il tuo colore preferito?');
console.log(userColor);

document.getElementById('hello').innerHTML = userName;

document.getElementById('pwd').innerHTML = userName+userLastName+userColor+22;

document.getElementById('pwd_separate').innerHTML = userName + ' ' + userLastName + ' ' + userColor + ' ' + 22;





