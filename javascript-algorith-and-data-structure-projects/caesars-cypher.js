function rot13(str) {

//Create a new variable which converts str to an upper case array
var cypher = [...str.toUpperCase()];
//console.log(cypher);

//Create variables for the first a second part of the alphabet so we can compare later
var alpha1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

var alpha2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Loop through each letter in cypher using a for loop
for(var item = 0; item < cypher.length; item++){
  //console.log(cypher[item]);

  //Loop through the first alphabet array 
  for (var index = 0; index < alpha1.length; index++) {
    //console.log(alpha1[index]);

    //If the item from the cypher loop matches the index of the first alphabet array 
    if (cypher[item] === alpha1[index]){ 
        //then the item from the cypher is equal to the index from the second alphabet array
        cypher[item] = alpha2[index];
        //otherwise if the item from the cypher is equal to the index of the second alphabet array 
    } else if (cypher[item] === alpha2[index]){
        //Then the cypher item is equal to the index from the first alphabet array
        cypher[item] = alpha1[index];
    }
  }

  
}
 console.log(str);
 console.log(cypher.join(""));
  return cypher.join("");
}
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); 
