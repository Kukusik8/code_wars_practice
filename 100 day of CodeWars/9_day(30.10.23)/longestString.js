// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

function longest(s1, s2) {
  let combinedString = s1.concat(s2);

  let uniqueLetters = [...new Set(combinedString.split(""))];
  console.log(typeof uniqueLetters);
  let sortedString = uniqueLetters.sort().join("");

  return sortedString;
}

console.log(longest("abc", "abd")); // выведет "abcdefklmopqwxy"

//сет использовали и остальись только уникальные значения а sort просто по алфавиту все сделал. join потом просто в строку обратно все