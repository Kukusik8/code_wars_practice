// Implement the function unique_in_order which takes as argument a sequence and
// returns a list of items without any elements with the same value next to each other
// and preserving the original order of elements.

// uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
// uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

let uniqueInOrder = function (iterable) {
  let arr = [];
  for (let i = 0; i < iterable.lenght; i++) {
    arr.filter((a, b) => {
      arr.push(a !== b);
    });
    return arr;
  }
};

console.log(iterable("fasfsafsa"));
