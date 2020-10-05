function sumAll(arr) {
  //first create 3 variables 
  let fullArr = []; //hold all the numbers in the range
  let sum = 0; //hold sum of all numbers from fullArr
  const reducer = (accumulator, currentValue) => accumulator + currentValue; //get the sum of the numbers
  //then sort the array
  arr.sort(function(a,b){return a-b});
  //use a for loop to take all the numbers from arr[0] tp arr[1] and push them into our fullArr array
  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
}
//sum up all the numbers in our fullArr array using .reduce() with our reducer function.
sum = fullArr.reduce(reducer);
return sum;
}

sumAll([1, 4]);
