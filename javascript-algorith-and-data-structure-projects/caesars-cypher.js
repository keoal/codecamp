//input str then for every letter in str iterate through rot13 until letter is found, then match index with index of latin and output letter to new string, repeat until the end of str is reached.

function rot13(str) {

//Create a new variable which converts str to an upper case array
var array = [...str.toUpperCase()];
//console.log(array);


var alpha1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

var alpha2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Loop through array using a for loop
for(var item = 0; item < array.length; item++){
  //console.log(array[i]);
  //Loop through the first alphabet array 
  for (var index = 0; index < alpha1.length; index++) {
    //console.log(alpha1[index]);
    //If the item from the array loop matches the index of the firt alphabet array 
    if (array[item] === alpha1[index]){ 
        //then the item from the array is equal to the index from the second alphabet array
        array[item] = alpha2[index];
        //otherwise if the item from the array is equal to the index of the second alphabet array 
    } else if (array[item] === alpha2[index]){
        //Then the array item is equal to the index from the first alphabet array
        array[item] = alpha1[index];
    }
  }

  
}
 console.log(str);
 console.log(array.join(""));
  return array.join("");
}
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); 
