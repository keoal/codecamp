function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  console.log(currNumber);
  while (currNumber <= num) {
    
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
    console.log(currNumber);
  }

  return result;
}

// test here
sumFibs(4);
