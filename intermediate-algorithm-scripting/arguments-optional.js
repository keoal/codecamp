function addTogether(first, second) {
  console.log(first);
  //check to see if first is a number if not return undefined
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
  //check if second is a number if true add to first else undefined
    typeof second === "number" ? first + second : undefined;
  //return 
  console.log(typeof second); 
  console.log(sum(second)); 
  //if typeof second is undefined return sum function otherwise return sum of arguments
  return typeof second === "undefined" ? second => sum(second) : sum(second);
  //console.log("Answer", typeof second === "undefined" ? second => sum(second) : sum(second));
}

addTogether(2, 3);
