function destroyer(arr) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments.length);
  //create a new array to store the extra arguements to be removed
  let values = [];
  //loop through the arguments array starting at 1 and push the results to the values array
  for(let i = 1; i < arguments.length; i++){
    values.push(arguments[i]);
  }
  //create a new variable for arr2 and filter arr where the index of values is [-1] and return the values that only appear in values [-1]
  let arr2 = arr.filter(function(currentValue){
    return values.indexOf(currentValue) === -1;
  })
  console.log("values", values);
  console.log("arr2", arr2);
  return arr2;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
