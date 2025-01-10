const name = "Devansh";
let id = 12;
var email = "example@gmil.com";
password = "12334";

console.table([name, id, email, password])

/* 
Note: here const name variable gives the warning because word "name" is preserved word for the property of "window" keword. (window.name) this 
function is outdated now so it gives the warning 

how to resolve it 

just simple replace the "name" word with the another variable name for example use "username" insted or any other name.
*/