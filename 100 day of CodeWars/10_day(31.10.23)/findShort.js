// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arr = s.split(" ");
  let res = [];
  for (let item of arr) {
    res.push(item.length);
  }
  return Math.min(...res);
}
console.log(findShort("Here is a thing"));

//math.min/max -они могут работать с массивами только через спред оператор

//более короткий
// function findShort(s) {
//   return Math.min(...s.split(" ").map((s) => s.length));
// }
