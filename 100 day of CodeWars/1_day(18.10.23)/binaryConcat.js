// Реализуйте функцию, которая складывает два числа и возвращает их сумму
// в двоичном формате.Преобразование может быть выполнено до или после сложения.
// Возвращаемое значение должно быть строкой, представляющей двоичное число.

const addBinary = (a, b) => {
  let res = a + b;
  return res.toString(2);
};

console.log(addBinary(1, 2));

// function addBinary(a, b) {
//   let res = a + b;
//   return res.toString(2);
// }

// console.log(addBinary(8, 2));
