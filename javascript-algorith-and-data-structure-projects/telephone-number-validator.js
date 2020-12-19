function telephoneCheck(str) {
  var regex = /^1*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
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

telephoneCheck("1 (555) 555-5555");

telephoneCheck("5555555555");

telephoneCheck("1 (555) 555-5555");

telephoneCheck("1(555)555-5555");
