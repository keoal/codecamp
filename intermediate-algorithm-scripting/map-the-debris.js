function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var twoPi = 2*Math.PI;
  var newArr = [];
  
//Function to calculate Orb Period
  var getOrbPeriod = function(obj) {
      //get the total radius to the power of 3 using Math.pow
      var radius = Math.pow(earthRadius + obj.avgAlt, 3);
      console.log("radius ", radius);

      //Get the square root of radius over GM
      var rCgm = Math.sqrt(radius / GM);
      
      //Now calculate the orbPeriod rounded to the nearest integer
      var orbPeriod = Math.round(twoPi * rCgm);
      console.log("orbPeriod", orbPeriod);

      //Return object with new orbPeriod
      return {name: obj.name, orbitalPeriod: orbPeriod};
  };


//loop through property(elem) in object(arr) and push getOrbPeriod 
  for (var elem in arr) {
    console.log("elem in arr", arr[elem]);
    console.log("getOrbPeriod", getOrbPeriod(arr[elem]));
    newArr.push(getOrbPeriod(arr[elem]));
  }
  
  console.log("newArr", newArr);
  return newArr;
}



orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
