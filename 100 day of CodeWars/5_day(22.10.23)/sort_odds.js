// You will be given an array of numbers.You have to sort the odd numbers in ascending order
// while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0
//  если нечетное то сортируем применяя например мэп или сорт и добавляем в новый массив

function sortArray(array) {
  const odds = array.filter(element => element % 2 !== 0);
  const sortedOdds = odds.sort((a, b) => a - b);
  
  let currentIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = sortedOdds[currentIndex];
      currentIndex++;
    }
  }
  
  return array;
}

console.log(sortArray([7, 1, 4, 2, 6, 3, 5]));



// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   return array.map((x) => (x % 2 ? odd.shift() : x));
// }