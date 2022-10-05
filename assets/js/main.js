/***************************** 
 Versione Base
******************************/

let userName = prompt('quale è il tuo nome?');
/* console.log(userName) */

let userLastName = prompt('quale è il tuo cognome?');
//console.log(userLastName)

let userColor = prompt('quale è il tuo colore preferito?');
//console.log(userColor)

document.getElementById('pwd').innerHTML = userName+userLastName+userColor+22;