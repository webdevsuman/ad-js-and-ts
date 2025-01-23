//-------------------------------------------------SPREAD---------------------------------------
const a = "Hello";
const b = "Boy";

const c = [...a,...b];

// console.log(c);

//-------------------------------------
const a1 = [1,2,3];
const b1 = a1;

//Shalow copy---------
// a1.push(5);
// console.log(b1,a1);

//Full copy----------
const s =[...a1,5];
// console.log(a1,s);

const m = [1,2,3,4,5,6];
const n = [7,8,9,10];
const o = [...m,...n];
// console.log(o);

//---------------------------------------------REST PARAMETER--------------------------------
const af= (...item)=>{
    //by default rest parameter stores argument in Array structure
    // console.log(item);
}

af(1,2,3,4);