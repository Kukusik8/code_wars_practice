//Ваша задача состоит в создании функции,
//которая может принимать любое неотрицательное
//целое число в качестве аргумента и возвращать его с цифрами в порядке убывания.
//По сути, нужно переставить цифры таким образом, чтобы получить наибольшее возможное число.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

//Можно сделать пустой массив, пройтись по массиву чисел и
//  добавлять в новый массив каждый элемент проверкой, добавлять в конец или в начало и потом в число в строку и потом в число
// function descendingOrder(n) {
//   let res = n.toString().split("");
//   res.sort((a, b) => {
//     return b - a;
//   });
//   let result = parseInt(res.join(""));
//   return result;
// }

// console.log(descendingOrder(123));

// Более простое решение
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

let num = 123;
let arr = Array.from(String(num), String);
console.log(arr);
