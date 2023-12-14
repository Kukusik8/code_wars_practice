//Find the summ

let arr = [[1, 2, [3, 4]], [9], [10, 12]];

// 1 способ
// let res = arr.flat(3).reduce((acc, next) => acc + next);
// Метод flat выворачивает массив принимает глубину
// console.log(res);

let res = flat(arr).reduce((acc, next) => acc + next);

const flat = (n) => {
  const result = [];
  n.forEach((element) => {
    if (Array.isArray(element)) {
      res = res.concat(flat(element));
    } else {
      res.push(element);
    }
  });
};
