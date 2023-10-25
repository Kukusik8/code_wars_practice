// Дана строка из цифр, вам необходимо заменить любую цифру ниже 5 на '0',
//     а любую цифру 5 и выше на '1'.Верните получившуюся строку.

// Примечание: ввод никогда не будет пустой строкой.

const fakeBin = (x) => {
  return x > 5 ? 1 : 0;
};

console.log(fakeBin(6));

// function fakeBin(x) {
//   let result = "";
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] < 5) {
//       result += x[i] = 0;
//     } else {
//       result += x[i] = 1;
//     }
//   }
//   return result;
// }

// console.log(fakeBin([1, 2, 3, 4, 5]));
