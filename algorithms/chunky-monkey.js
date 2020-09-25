//PEDAC

//Problem:
//we have two inputs here: arr an array of seperate characters & size which determines the size of the broken down groups.
//our output will be a two dimensional array returning the groups.

//Examples/test cases - see left

//Data Structure
//we are given an array containing seperate characters, we need to return these grouped according to the size argument

//Algorithm
//We need to find the length of the array
//we need to create a blank array for the output
//we need to loop through the array and create the chunks based on size

//Code

function chunkArrayInGroups(arr, size) {
  var index = 0;
  var arrayLength = arr.length;
  console.log(arrayLength)
  var output = [];
  console.log(output)

 for (index = 0; index < arrayLength; index += size) {
        var myChunk = arr.slice(index, index+size);
        // Do something if you want with the group
        console.log(myChunk);
        output.push(myChunk);
    }
    console.log(output);
return output;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
