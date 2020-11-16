// flatten the nested array
function steamrollArray(arr) {
  //create new flat array and spread out and concat
  let flatArray = [].concat(...arr);
  console.log(arr);
  console.log(flatArray);
  //Use Array.some() method to find out if the new array contains an array still
  //If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
  //If it does not, return the flattened array
  return flatArray.some(Array.isArray) ? steamrollArray(flatArray) : flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
