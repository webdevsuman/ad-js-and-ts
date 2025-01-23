//--------------FILTER METHOD--------------

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Anonymous function- for single statement, dependent-- ES5

/*const lessThan5 = a.filter(function (item) {
  return item > 5;
});*/

//ES6 - Fat arrow
const lessThan5 = a.filter((item) => item < 5);

// console.log(lessThan5);

//Question-------------------------------------------------------
const objArray = [
  {
    name: "Nill",
    phone: 454561212,
  },
  {
    name: "Ratan",
    phone: 454561212,
  },
  {
    name: "Suman",
    phone: 454561212,
  },
  {
    name: "Jeshan",
    phone: 454561212,
  },
  {
    name: "Rajeev",
    phone: 454561212,
  },
  {
    name: "Deepika",
    phone: 454561212,
  },
];

const nameLess6 = objArray.filter((el) => el.name.length < 6);

// console.log(nameLess6);

//----------------------------------------------------------------------
//Return Even and Odd

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = arr.filter((el) => el % 2 == 0);
const odd = arr.filter((el) => el % 2 != 0);

// console.log("Even:", even);
// console.log("Odd:", odd);

//----------------------------------------------------------------------
//------Prime No--------------------
const numbers = [
  -11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const prime = numbers.filter((el) => {
  if (el <= 1) {
    //Commenting this below line will result in returning the Negative primes as well
    return false;
  }
  for (let i = 2; i < el; i++) {
    if (el % i === 0) {
      //Return means getting out of Loop, out of Function,
      return false;
    }
  }
  return true;
  /*--------O--R--------*/
  //   for(let i=2; i<el/2; i++){
  //     if(el%i===0){
  //       return false;
  //     }
  //     return el !==1;
  //   }
});

// console.log(prime);
