function convertToRoman(num) {
 let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

 let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

 //create new string for output
 var romanNumeral = "";
 // for loop to iterate through decimal array until the value of the current index fits into num
 for(var index = 0; index < decimal.length; index++){
     //and then a while loop to add the index of roman to roman numeral while the index of decimal is less than or equal to num
     while (decimal[index] <= num){
         romanNumeral += roman[index]; //x=x+Y
         num -= decimal[index];
     }
 }

 
 //return Roman Numeral
 console.log(romanNumeral);
 return romanNumeral;
}

convertToRoman(36);
