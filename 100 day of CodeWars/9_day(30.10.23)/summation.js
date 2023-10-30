//если я ввожу 5 то я должен получить (1+2+3+4+5) и результат 15 то есть от 0 до заданого чсила нужно найти сумму
// 2 -> 3 (1 + 2) и переменные должны быть больше 0  length<num
var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++){
    sum += i;
  
  }
  return sum;
};

console.log(summation(8));
