//X - это как закрашенная область(1)
//3 фигуры 24 периметр
const matrix = ["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"];
// Нужно вычислить периметр закрашенных элементов в матрице
// P=2*(length+width)
function perimetr(matrix) {
  let p = 0;
  for (let i = 0; i < matrix.length; i++) {
    //теперь для строки каждой иттерируем
    //массив по индексу i - это у нас строка каждая, а по индексу j это уже элемент строки
    // 1 + true = 2; 1 + false = 1;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "X") {
        p += j === 0 || matrix[i][j - 1] === "O";
        p += i === 0 || matrix[i - 1][j] === "O";
        p += i === matrix.length - 1 || matrix[i + 1][j] === "O";
        p += j === matrix[i].length - 1 || matrix[i][j + 1] === "O";
      }
    }
  }
  return p;
}
// Иными словами, если текущий элемент "X" находится в начале строки (j === 0) или с левой стороны от него (matrix[i][j - 1] === "O"), то к переменной p прибавляется 1.

