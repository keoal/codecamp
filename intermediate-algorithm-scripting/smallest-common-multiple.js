function smallestCommons(arr) {
  //create a new array with all the numbers in the range.
  let fullArr=[]
  //loop through the array if i is equal to the biggest number and is greater than or equal to the smallest number then iterate from largest to smallest number and push into the array. 
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    fullArr.push(i);
}
  console.log(1);
  console.log(arr);
  console.log(fullArr);

//Find the greatest common divisor first (GCD)
//https://learnersbucket.com/examples/algorithms/program-to-find-the-gcd-of-two-numbers-in-javascript/
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


smallestCommons([5,1]);
