  function dropElements(arr, func) {
  // drop them elements.
  //create a new variable for the array length
  var times = arr.length;
  //loop through as long as i is less than the array length if condition is true then break otherwise remove first elements of array until the condition becomes true.
  for (var i = 0; i < times; i++) {
    console.log(func(arr[0]));
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  console.log(arr);
  return arr;
}
  

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
