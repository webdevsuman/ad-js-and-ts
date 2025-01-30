const newArray = [];
const map = (arr, fn) => {
  for (let i in arr) {
    newArray[i] = fn(arr[i], i);
  }
  console.log(newArray);
};

const arr = [1,2,3];
function plusOne(n){
    return n+1;
}

map(arr,plusOne);