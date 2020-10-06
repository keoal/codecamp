function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
//create variable srcKeys to get the key for the source argument
var srcKeys = Object.keys(source);
console.log("srcKeys", srcKeys);
console.log("srcKeys length", srcKeys.length)
console.log("collection", collection)
//filter through collection array 
return collection.filter(function(obj) {
    //loop through each item in the object,  check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
    for (var i = 0; i < srcKeys.length; i++) {
      //We return false if the if statement is correct. Otherwise, we return true;
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
