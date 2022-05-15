const input = require("readline-sync");

console.log(addUp(input.question("Enter a number to return the add-up result from 1 to the number: ")));

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i ++ ) {
    sum += i;
  }
  return sum;
}