function smallestCommons(arr) {
  //create a new array with all the numbers in the range.
  let fullArr=[]
  for (var i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
}
  console.log(arr);
  console.log(fullArr);

  //Find the greatest common divisor first (GCD)
  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  }

  //then calculate the lcm (least common multiple)
  let lcm = fullArr[0];
  for (i = 1; i < fullArr.length; i++) {
    var GCD = gcd(lcm, fullArr[i]);
    lcm = (lcm * fullArr[i]) / GCD;
  }
  console.log(lcm);
  return lcm;

}


smallestCommons([1,6]);
