function pairElement(str) {
  //create a new array for paired
  var paired = [];
  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };
  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }
  console.log(str);
  console.log(paired);
  return paired;
}

pairElement("GCG");
pairElement("ATCGA");
