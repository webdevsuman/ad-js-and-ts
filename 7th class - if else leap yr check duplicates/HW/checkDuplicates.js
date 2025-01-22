//Q) duplicate vaules seperate in an array a=[1,1,2,2,2,3,4,5]// Print [1,2]

const inputArray = [1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6,"name","name",'clr',true,false,true];
const outputArray = [];

inputArray.forEach((el) => {
  //Find index of current element
  const index = inputArray.indexOf(el);
  
  //Delete the current element
  inputArray.splice(index, 1);
  
  //Find the copy after deleting the original one.
  //If exists && output array has no such element, then push it to the output array
  if (inputArray.includes(el) && !outputArray.includes(el))
    outputArray.push(el);
});

console.log(outputArray);
