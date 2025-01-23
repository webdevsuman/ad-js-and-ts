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

//------------------------RETURN VALUES LESS THAN 3 ----------
let result3 = [];

const lessThan3 = (...el) => {
    // for(let i of el){
    //     if(i<3){
    //         result3.push(i);
    //     }
    // }
    //Less than 3 return
    result3 = el.filter(i => i<3);
}

lessThan3(...number);

// console.log(result3);
