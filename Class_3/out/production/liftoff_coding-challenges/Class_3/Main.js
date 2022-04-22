const FirstReverse = (str) => {

  // code goes here
  let arrayOfStr = str.split('');
  arrayOfStr = arrayOfStr.reverse();
  str = arrayOfStr.join("");
  return str;

}

// keep this function call here
console.log(FirstReverse(readline()));