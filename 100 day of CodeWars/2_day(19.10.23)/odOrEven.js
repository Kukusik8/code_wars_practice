// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Input: [0];
// Output: "even";

// Input: [0, 1, 4];
// Output: "odd";

// Input: [0, -1, -5];
// Output: "even";

const oddOrEven = (arr) => {
  let res = arr.reduce((total, index) => {
    let sum = total + index;
    return total + index;
  });
  return res % 2 === 0 ? "Sum is even" : "Sum is odd";
};

console.log(oddOrEven([1, 2, 2]));
// function oddOrEven(array) {
// let res = array.reduce((ind, el) => {
//     return ind + el;
// }, 0);
// return res % 2 === 0 ? "Четное" : "Нечетное";
// }

// console.log(oddOrEven([4, 2, 3]));
