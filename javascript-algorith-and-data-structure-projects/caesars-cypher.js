//input str then for every letter in str iterate through rot13 until letter is found, then match index with index of latin and output letter to new string, repeat until the end of str is reached.

function rot13(str) {

var array = [...str.toUpperCase()];
//console.log(array);
var latin = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

var cypher = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//loop through cypher until letter is found until last letter in str is reached
for(var i = 0; i < array.length; i++){
  //console.log(array[i]);
  for (var j = 0; j < latin.length; j++) {
    //console.log(latin[j]);
    if (array[i] === latin[j]){ //if array letter is the same as latin letter array letter is equal to cypher letter.
        array[i] = cypher[j];
    } else if (array[i] === cypher[j]){// otherwise if array letter is the same as cypher letter array letter is then equal to latin letter
        array[i] = latin[j];
    }
  }

  
}
 //console.log(str);
 console.log(array.join(""));//join all array characters back into a string
  return str;
}
rot13("SERR PBQR PNZC");
