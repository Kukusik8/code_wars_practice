// Реализуйте функцию, которая складывает два числа и возвращает их сумму
// в двоичном формате.Преобразование может быть выполнено до или после сложения.
// Возвращаемое значение должно быть строкой, представляющей двоичное число.

// interface Numbs{
//     a: number;
//     b: number;
// }

// function summOfTwo({ a, b }:Numbs): number {
//     return a + b;
// }

// summOfTwo({ a: 2, b: 3});

// type numers = number

// function summOfTwo(a:numers, b:numers): number {
//     return a + b;
// }

function summOfTwo(a: number, b: number): string {
    let res = a + b;
    return res.toString(2);
}