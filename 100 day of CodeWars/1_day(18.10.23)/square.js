// For example,
// if we run 9119 through the function, 811181 will come out,
//     because 92 is 81 and 12 is 1.(81 - 1 - 1 - 81)

// function squareDigits(num) {
//   let result = [];
//   for (let i = 0; i < num.length; i++) {
//     let item = num[i] * num[i];
//     result.push(item);
//   }
//   return result.join("");
// }

// console.log(squareDigits([9, 1, 1, 9]));
//-----------------------------------------
function squareDigits(num) {
  return parseInt(
    String(num)
          .split("") 
      .map((digit) => digit * digit) 
      .join("")
  );
}

console.log(squareDigits(9119)); // Выведет 811181
console.log(squareDigits(765)); // Выведет 493625
