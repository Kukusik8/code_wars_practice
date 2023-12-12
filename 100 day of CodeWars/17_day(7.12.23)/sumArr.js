//Find the summ

let arr = [[1, 2, [3, 4]], [9], [10, 12]];

let res = arr.flat(3).reduce((acc, next) => acc + next);
console.log(res);
