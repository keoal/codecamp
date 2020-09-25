//PEDAC

//Problem:
//We have one input here: arr an array with two strings containing letters
//our output is going to be a boolean after determining if all the letters in the second string are present in the first

//Examples/test cases - see left

//Data Structure
//we are given an array containing two strings and expected to return a boolean

//Algorithm
//we need to change both strings to lowercase
//loops throug the test characters and if any of them is not found return false
//if they are founf return true

//Code

function mutation(arr) {
  var test = arr[1].toLowerCase();
  console.log(test)
  var target = arr[0].toLowerCase();
  console.log(target)
  //loop through test to see if any of the characters are there
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
