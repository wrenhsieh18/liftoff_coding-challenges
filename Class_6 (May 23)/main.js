function detectWord(str) {
    let word = str.match(/[a-z]/g);
    return word.join('');
    
  }
  
  console.log(detectWord("UcUNFYGaFYFYGtNUH"));
  console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
  console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
  
  