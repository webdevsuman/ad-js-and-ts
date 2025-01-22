// ------------------------------STRING METHOD-----------------------------------
//Letter-wise split--------------------------
const a = "suman";
const b = a.split("");
const c = a.split("",[2]);

// console.log(b);
// console.log(c);
//Word-wise split-----------------------------
const sen = "Hi world, bye world";
const senSplit = sen.split(" ");
const wordSplit = sen.split(" ",[3]);//position-wise


// console.log(senSplit);
// console.log(wordSplit);

//Index-wise-----------------------------------
const m = "Suman Das";
const n = m[2].split();

// console.log(n); // m

//Split particular letter-wise-----------------------
const p = "12-00-2000"
const q = p.split("-");

// console.log(q);// ['12','00','2000']