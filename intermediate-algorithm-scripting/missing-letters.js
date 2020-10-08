//create alphabet string;

function fearNotLetter(str) {
  console.log(str);
  //loops through the string and get the charcode for index 1.
  for (let i = 1; i < str.length; ++i) {
    console.log("str.charCodeAt(i)", str.charCodeAt(i));
    console.log("str.charCodeAt(i - 1)", str.charCodeAt(i - 1));
    //if the charcode is greater than 1 return charcode answer and convert back to letter
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      console.log("charcode answer", str.charCodeAt(i - 1) + 1);
      console.log("answer", String.fromCharCode(str.charCodeAt(i - 1) + 1));
      //change charcode back to letter
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      //The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
    }
  }
  
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf")
