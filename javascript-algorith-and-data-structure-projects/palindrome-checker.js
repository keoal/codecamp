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

var rWordStr = rWord.join("");
console.log("rWord String: ", rWordStr);
console.log("str: ", str);
  //if word == rWord
  //return true;
  if(rWord === str){
    console.log("Yay! its a palindrome!!!")
  } else {
    console.log("Boo! Not a palindrome!")
  }
}



palindrome("eye");
