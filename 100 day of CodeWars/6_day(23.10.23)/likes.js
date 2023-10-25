// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//Написать типо если 1 человек выводит его имя если 2 союз И, Больше 4 цифра.

function WhoLikes(arr) {
  if (arr.length === 0) {
    return `no one likes this`;
  } else if (arr.length === 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]} like this `;
  } else if (arr.length === 3) {
    return `${arr[0]},${arr[1]} and ${arr[2]} like this }`;
  } else if (arr.length === 4) {
    return `${arr[0]},${arr[1]} and other ${arr.length - 2} like this `;
  }
}

console.log(WhoLikes([]));
