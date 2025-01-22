const numbers = [
  -23,-11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
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

console.log(prime);
