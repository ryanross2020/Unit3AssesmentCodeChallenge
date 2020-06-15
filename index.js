function reverseInt(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
}

console.log(reverseInt(15))
console.log(reverseInt(981)) 
console.log(reverseInt(500))
console.log(reverseInt(-15)) 
console.log(reverseInt(-90)) 

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    // create character map
    for (let char of str) {
      if (charMap[char]) {
        // increment the character's value if the character existed in the map
        charMap[char]++;
      } else {
        // Otherwise, the value of the character will be increamented by 1
        charMap[char] = 1;
      }
    }
  
    // find the most commonly used character
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }

console.log(maxChar("abcccccccd"))
console.log(maxChar("apple 1231111"))