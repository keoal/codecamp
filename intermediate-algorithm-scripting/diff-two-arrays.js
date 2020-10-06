//arr1 is the input array arr2 is the comparison array
//we need to merge the two arrays first
//Then filter through the merged array to remove the items that are not included in arr1 or arr2

function diffArray(arr1, arr2) {
   return arr1
    .concat(arr2)
    .filter(missing => !arr1.includes(missing) || !arr2.includes(missing));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
