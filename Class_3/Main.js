const FirstReverse = (str) => {

  // code goes here
  let reversedStr = str.split('').reverse().join("");
  return reversedStr;

}

// keep this function call here
console.log(FirstReverse(readline()));