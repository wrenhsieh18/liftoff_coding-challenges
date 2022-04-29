const input = require("readline-sync");
console.log(LongestWord(input.question("Input texts to find the longest word: ")))

const LongestWord = (sen) => {

  let array = sen.replace(/[^\w\s]|_/g,"").split(" ");
  let result = array[0];
  for (let i = 0; i < array.length-1; i++) {
    if (array[i].length < array[i+1].length ) {
      result = array[i+1];
    }
    
  }

  // code goes here  
  return result; 

}