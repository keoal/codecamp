//If num is zero, return an empty string.
//If num is not zero, repeat str the same number of times as num.
//Return the repeated string.

function repeatStringNumTimes(str, num) {
  //return empty string if less than zero
  if (num <= 0){
    return ''
  }
  // This variable will be our output.
  let repeatedString = ''
  //repeat string as long as it is less than num
  for (let i = 0; i < num; i++){
//        repeatedString = repeatedString + str
repeatedString += str
  }
  return repeatedString
}

repeatStringNumTimes("abc", 3);
