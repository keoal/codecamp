function binaryAgent(str) {
  console.log(str);
  //Create a new variable to split the input
  let bytes = str.split(' ');
  //console.log("bytes ", bytes);
  console.log("bytes length ", bytes.length);
  let output = '';
  for (let k = 0; k < bytes.length; k++){
      output += String.fromCharCode(convertToDecimal(bytes[k]));
  }
  console.log("Output", output);
  return output;

  
}

//convert from binary to decimal
function convertToDecimal(byte) {
  let result = 0;

  byte = byte.split('');

  byte.reverse();

  for (let a = 0; a < byte.length; a++){
    if (byte[a] === '1'){
      result += 2 ** a;
    }
  }
  console.log("Decimal Result ", result);  
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
