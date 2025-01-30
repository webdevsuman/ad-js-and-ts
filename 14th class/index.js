//----------------------HIGHER ORDER FUNCTION OR CALLBACKS--------------------------------
function A(item){
    //HIGHER ORDER FUNCTION
    item();
};

function B(){
    //CALLBACK
    //Callbacks are dependent. Because if A runs, only then B runs. Otherwise not.
    // console.log("CallBack");
};

//Returns the value of B
A(B);

//----------------------------------DESTRUCTURING------------------------------------------
//Destructuring means to break down a complex structure into simpler parts.
//-----ARRAY DESTRUCTURING------
const a = [1,2,3,4,5,6,7];
//ES6 syntax
const [b,c,d,e,f,t] = a;
// console.log(d);
// console.log(t+1);

/*ES5 syntax
const m = a[0];
console.log(m); */

//-----OBJECT DESTRUCTURING------
const obj = {
    name: "Suman",
    address: "Kolkata",
    hobby: {
        sleep: 8,
    }
}

const {name, address, hobby} = obj;

// console.log(name,hobby["sleep"]);