/*--------------------------------CONCAT, SPREAD OPERATOR-----------------------------------*/

const a = "Hello";
const b = "Boy";
const c = a.concat(b);
//for string, array, number, (NOT object)
// console.log(c);

//---------------------------------------------------------------------
//(for object we use SPREAD OPERATOR)
const objA = { name: "Suman" };
const objB = { address: "Kolkata" };
const objWhole = { ...objA, ...objB };
// console.log(objWhole);

//---------------------------------------------------------------------
// console.log(a+" "+b);

//-------------------JS Coercion-----------------------------------
// console.log(typeof (5 + "5"));
// console.log(typeof ("5" + 5));
