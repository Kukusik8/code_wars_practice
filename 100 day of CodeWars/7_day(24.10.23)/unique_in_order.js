// Implement the function unique_in_order which takes as argument a sequence and
// returns a list of items without any elements with the same value next to each other
// and preserving the original order of elements.

// uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
// uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

// let uniqueInOrder = function (iterable) {
//   let arrIter = iterable.split("");
//   let res = [];
//   for (let i = 0; i < arrIter.length; i++) {
//     res = arrIter.sort((a, b) => {
//       if (a !== b) {
//         res = arrIter.push(res);
//       }
//     });
//   }

//   return res;
// };

// console.log(uniqueInOrder("AABC"));

function uniqueInOrder(iterable) {
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
}

console.log(uniqueInOrder(["a", "a", "a", "b", "b", "c", "c", "a", "a"]));

//Более простое решение 
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};