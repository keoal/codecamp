function findLongestWordLength(str) {
  let words = str.split(" ");
  console.log(words);

  let lengths = words.map(word => word.length)
  console.log(lengths);
  //spread the array into seperate arguments
  return Math.max(...lengths)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
