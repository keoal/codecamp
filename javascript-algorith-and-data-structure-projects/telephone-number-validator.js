function telephoneCheck(str) {
  //var regex = /^1*[/(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  // check for 1 or 1 followed by space, check for 3 digits with or without parenthese or spaces each side, check for another 3 digits then check for the hyphen, check for another 4 digits.
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  //var regex = /^1*\d{10}$/;
  if(regex.test(str)){
      console.log("Valid US Number!");
      return true;
  }else{
      console.log("Not a valid US Number!");
      return false;
  }
}

telephoneCheck("555-555-5555");

telephoneCheck("1 555-555-5555");

telephoneCheck("1 (555)555-5555");

telephoneCheck("5555555555");

telephoneCheck("1 (555) 555-5555");

telephoneCheck("1(555)555- 5555");

telephoneCheck("555-5555");
