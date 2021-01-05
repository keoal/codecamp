function palindrome(str) {
  
  //First clean the string an make it lowercase removing non-alpha numeric characters.
  var cleansed = str.toLowerCase().replace(/[\W_ ]/g, "");
  console.log(cleansed);

  //Convert the cleansed string into an array
  var word = [...cleansed];
  //console.log("word", word);

  //Create an empty array to store the reversed word
  var rWord = [];
  //str.replace(/[^a-zA-Z ]/g,);
  //console.log(word.pop());
  //console.log(word.length);
 
 //Loop through the word backwards and push each letter into the empty array 
 for (var i = word.length -1; i >= 0; i--){
   console.log("for", word[i]);
  // word[i].pop;
   rWord.push(word[i])
 }
console.log(rWord);

//rejoin the reverse word into a string
var rWordStr = rWord.join("");

//var cleansed = rWordStr.replace(/[^a-zA-Z ]/g, "");
console.log("rWord String: ", rWordStr);
console.log("str: ", cleansed);
  //if word == rWord
  //return true;

  //Use an if else statement to check if the word is a palindrome by comparing the cleansed string to the reversed word.
  if(rWordStr === cleansed){
    console.log("Yay! its a palindrome!!!")
    return true;
  } else {
    console.log("Boo! Not a palindrome!")
    return false;
  }
}


//Input for function argument
palindrome("ta ce%car");
