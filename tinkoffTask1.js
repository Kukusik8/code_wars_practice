// В офис привезли какой-то набор из больших латинских букв. Проверьте, что из них действительно можно составить строку «
// TINKOFF» для вывески. Тинькофф не хочет платить за лишние буквы, поэтому должны быть использованы все привезённые буквы.

function validWord(str) {
  let word = "TINKOFF";
  let letters = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letters[letter]) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  }
  for (let j = 0; j < word.length; j++) {
    const actualLetter = word[j];
    if (!letters[actualLetter] || letters[actualLetter] === 0) {
      return "No";
    } else {
      letters[actualLetter]--;
    }
  }
  for (let key in letters) {
    if (letters[key] !== 0) {
      return "No";
    }
  }
  return "Yes";
}
р;

console.log(validWord("TINKOFF"));
console.log(validWord("TINKOFFF"));
console.log(validWord("AAAA"));
console.log(validWord("FFOKNIT"));
console.log(validWord("TINKOF"));
