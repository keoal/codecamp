//Determine the length of target.
//Pluck the same number of letters off the end of str.
//Return true if those letters match target, and false if they don’t.

function confirmEnding(str, target) {
  //slice str and remove target length from str length
  let ending = str.slice(str.length - target.length)
  //confirm ending is the same as target
  return ending === target;
}

confirmEnding("Bastian", "n");
