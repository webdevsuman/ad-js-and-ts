/*Basic intro of js
data types primitive and non-primitive
let, var, const difference
console.log*/

let x = "hello"; //Local scope
console.log(x, typeof x);

const m = 4; // Can't be left unassigned
//m = 5; can't be reassigned
console.log(m, typeof m);

var y = true; // Global scope
console.log(y, typeof y);
var y = 9; // Redeclare can be done when using var.
console.log(y, typeof y);
