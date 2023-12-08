//разевернуть массив элементов метод reverse использовать нельзя
// Можно перебрать массив с конца
const arr = [1, 2, 3, 4, 5];
const reversed = [];

for (let index = arr.length - 1; index >= 0; index--) {
  reversed.push(arr[index]);
}

console.log(reversed);
