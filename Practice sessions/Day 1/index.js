//1.  an array 5 obj name, address,, if length f add <5, return == using loop and reduce
const objArray = [
    {
        name: "Anish",
        address: "Belgharia"
    },
    {
        name: "Jishan",
        address: "UP"
    },
    {
        name:"Suman",
        address: "Hooghly"
    },
    {
        name: "Koel",
        address: "Digha"
    }
]

const result = objArray.reduce((acc,cur)=>{
    cur.address.length < 6 && acc.push(cur.address);
    
    return acc;
},[])

// console.log(result);

//Same result using loop-------
const resultLoop = [];

for(el of objArray){
    el.address.length < 6 && resultLoop.push(el.address);
};

// console.log(resultLoop);



//2.---------------------------------------------------------------
//   an array without using push , add value
const arr = [1,2,3,4,5,6,7,8,9];
arr[arr.length] = "inputValue";
// console.log(arr); 
// 

/*3.---------------------------------------------------------------
let a = {
name: "cj",
address: "jd"

//add another property

} */

const obj ={
    name: "Suman",
    address: "Kolkata"
}

obj["value"] = "5 star";
// obj.value = "5 star";

// console.log(obj);