function spinalCase(str) {
  //Change string to lower case string
  //let lowerCaseString = str.toLowerCase()
  //console.log(lowerCaseString);
  //split string into an array using regexp to define where to split at spaces capitals and underscores
  let stringSplit = str.split(/\s|_|(?=[A-Z])/), i, hyphen;
  console.log("stringSplit", stringSplit);
  //loop through stringSplit array and change the first character in each string to lowercase and add it onto the rest of the string using .slice()
  for(i = 0; i < stringSplit.length; i++){
     stringSplit[i] = stringSplit[i].charAt(0).toLowerCase() + stringSplit[i].slice(1);
   }
//rejoin string with hyphens
   hyphen = stringSplit.join('-');
   console.log(hyphen);
  return hyphen;
}

spinalCase('This Is Spinal Tap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('thisIsSpinalTap');
