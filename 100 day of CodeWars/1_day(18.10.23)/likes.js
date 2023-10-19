// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//Написать типо если 1 человек выводит его имя если 2 союз И, Больше 4 цифра.

let names = ["John", "Pitter"];

for (let i = 0; i < names.lenght; i++) {
  let res = names[i];
  console.log(res);
}
