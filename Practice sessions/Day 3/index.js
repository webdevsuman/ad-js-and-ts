// 14)Write a function that accepts any number of arguments and returns their sum using the rest parameter.
const number = [1, 2, 3, 4, 5, 6];
let sum = 0;

const sumFn = (...el) => {
  // for(let i of el){
  //     sum = sum + i;
  // }
  //--------------------------------
  el.forEach((item) => (sum += item));
};

sumFn(...number);

// console.log(sum);

// 15)Create a function that takes any number of arguments (numbers) and calculates the average using the rest parameter.--------------------------------------------------------------------
// const number = [1, 2, 3, 4, 5, 6];
let avg;
const avgFn = (...arg) => {
  let sum = 0;
  const n = arg.length;
  arg.forEach((i) => (sum += i));
  avg = sum / n;
  return avg;
};
avgFn(...number);
// console.log(avg);

// 16)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.------------------------------------------------------------
const varNumbers = [5, 6, 9, 55, 101, 999, 800];
const largestNumber = (...arg) => {
  let result = 0;
  arg.reduce((acc, cur) => {
    result = acc > cur ? acc : cur;
    return result;
  });
  return result;
};

const resultFinal = largestNumber(...varNumbers);

// console.log(resultFinal);

// 17)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.-----------------------------------------------------------
// console.log(resultFinal);

// 18)Implement a function that takes a variable number of string arguments and returns an array containing only the strings with a length greater than a specified value using the rest---------
const varString = ["suman", "hribhu", "anurupa", "zeeshan", "anish"];
let result2;
const customLargeStrings = (value, ...arg) => {
  result2 = arg.filter((item) => item.length > value);
  return result2;
};
customLargeStrings(5, ...varString);
// console.log(result2);

// 19)Edit in array of object  property without changing original array of object.------------
const arrOfObj = [
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

const editedArrOfObj = arrOfObj.map((obj) => {
  if (obj.name === "Suman") {
    return { ...obj, phone: "999888666" };
  }
  return obj;
});
// console.log("New Obj",editedArrOfObj);
// console.log("Old Obj :",arrOfObj);
//----------------------------------------
//Q) Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
let count = 0;
const countVowel = (...arg) => {
  arg.forEach((el) => {
    el = el.toLowerCase();
    switch (el) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
      default:
    }
  });
  return count;
};

const input = "anurupa";

countVowel(...input);

// console.log(count);
