//Создать массив из уникальных элементов
const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

function uniqueItems(arr) {
  return [...new Set(arr)];
}

console.log(uniqueItems(fruits));
