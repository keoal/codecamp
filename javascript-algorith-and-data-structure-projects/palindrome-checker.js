function palindrome(str) {
  var word = [...str];
  var rWord = [];
  //str.replace(/[^a-zA-Z ]/g,);
  //console.log(word.pop());
  //console.log(word.length);
 for (var i = word.length -1; i >= 0; i--){
   console.log("for", word[i]);
  // word[i].pop;
   rWord.push(word[i])
 }
  
console.log(rWord);
  //if word == rWord
  //return true;
}



palindrome("racecar");
