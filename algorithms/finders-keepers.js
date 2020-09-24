//look through an array ad return the first element in it that passes a truth test.

//Run each number in arr through func.
//If a number through func evaluates to true, return that number.
//If no number through func evaluates to true, return undefined.

function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++){
   //if item in array is true to func return that item
    if (func(arr[i])) {
        return arr[i]
    }
    //otherwise undefined
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
