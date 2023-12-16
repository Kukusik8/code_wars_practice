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
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === "X") {
      }
    }
  }
}
