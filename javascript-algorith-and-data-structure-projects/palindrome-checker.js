function palindrome(str) {
  var cleansed = str.toLowerCase().replace(/[\W_ ]/g, "");
  var word = [...cleansed];
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
//var cleansed = rWordStr.replace(/[^a-zA-Z ]/g, "");
console.log("rWord String: ", rWordStr);
console.log("str: ", cleansed);
  //if word == rWord
  //return true;
  if(rWordStr === cleansed){
    console.log("Yay! its a palindrome!!!")
    return true;
  } else {
    console.log("Boo! Not a palindrome!")
    return false;
  }
}



palindrome("ra ce%car");
