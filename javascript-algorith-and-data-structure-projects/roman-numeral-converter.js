function convertToRoman(num) {
 let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

 let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

 //create new empty string for output
 var romanNumeral = "";

 // Use a for loop to iterate through the decimal array while the item is less than the length of the array
 for(var item = 0; item < decimal.length; item++){
     //console.log(item);
     console.log(decimal[item]);
     //While the amount of the decimal item is less than the number
     while (decimal[item] <= num){
         
         //Add the equivalent item from the roman array to the empty string
         romanNumeral = romanNumeral + roman[item];
         //romanNumeral += roman[item];
         //Take the amount from the decimal item away from the number until there is nothing left to avoid an infinite loop
         num = num - decimal[item];
         //num -= decimal[item];
     }
 }

 
 //return Roman Numeral
 console.log(romanNumeral);
 return romanNumeral;
}

convertToRoman(36);
