// LTR or RTL - the same
//LTR(abba) RTL (abba)

function palindrom(word) {
  word = word.toLowerCase();
  return word === word.split("").reverse().join("");
}
console.log(palindrom(""));
