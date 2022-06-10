// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

const charCount = (keyword, target) => {
    let regex = new RegExp(keyword, "g")
    return target.match(regex).length;
}
  
console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));