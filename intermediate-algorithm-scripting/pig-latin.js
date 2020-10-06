function translatePigLatin(str) {
  console.log(str);
  //Create a varible for vowel regex for first letter
  let vowelRegex = '^[aieouAIEOU].*'
  //Create a new blank string
  let newStr = "";
  //check to see if first letter is a vowel
  var matched = str.match(vowelRegex)
  if(matched)
  {
    console.log('matched');
    //add "way" on to the end of str if the first letter id a vowel
    let newStr = str + "way"
    console.log(newStr)
    return newStr
  }
else
  {
    console.log('not matched');
    //Our pattern looks at any character that is a vowel. If there are no vowels, then we assign firstMatch the value of 0.
    let firstMatch = str.match(/[aeiou]/g) || 0;
    console.log("firstMatch", firstMatch)
    //index of the first vowel found in the string using indexOf()
    let vowel = str.indexOf(firstMatch[0])
    console.log("vowel", vowel)
    //The str.substring(vowel) represents the section of the string without the consonant beginning.
    //The str.substring(0, vowel) represents the consonant or the consonant cluster. When we concatenate both strings together and slap on an “ay” at the end
    newStr = str.substring(vowel) + str.substring(0, vowel) + "ay"
    console.log("Consonant Pig:", newStr)
    return newStr

  }
  
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("algorithm");
translatePigLatin("schwartz")
