function getRandomElementFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Пример использования
const myArray = [
  "Жан-Хуан-Лу",
  "Gargen",
  "22 Chefs",
  "Южане",
  "Сабаи бар",
  "Top Poke",
  "Ist",
];
const randomElement = getRandomElementFromArray(myArray);
console.log(randomElement);
