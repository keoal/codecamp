//Determine which values in arr are falsy.
//Remove all falsy values.
//Return the new array that contains only truthy values.

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
