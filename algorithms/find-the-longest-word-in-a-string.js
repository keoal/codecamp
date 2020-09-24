function findLongestWordLength(str) {
  //split str
  let words = str.split(" ");
  console.log(words);
//get the length of each word
  let lengths = words.map(word => word.length)
  console.log(lengths);
  //spread the array into seperate arguments and find the biggest word
  return Math.max(...lengths)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

