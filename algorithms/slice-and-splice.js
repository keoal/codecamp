//Create a copy of arr2.
//Insert all the elements of arr1 into arr2 starting at the index in arr2 specified by n.
//Return the combined arrays.

function frankenSplice(arr1, arr2, n) {
  //create copy of arr2 by slicing arr2
  let combinedArrays = arr2.slice()
  console.log(combinedArrays)

  // Insert all the elements of arr1 into arr2 beginning
  // at the index specified by n. We're using the spread
  // operator "..." to insert each individual element of 
  // arr1 instead of the whole array. deletecount is set to zero!
  combinedArrays.splice(n, 0, ...arr1)
  console.log(combinedArrays)
  return combinedArrays;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
