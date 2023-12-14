//Сколько раз каждый элемент встречается в массиве
// {kiwi:3,apple:2,orange:1}

const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

const countFruits = (arr) => {
  let kiwi = 0;
  let apple = 0;
  let orange = 0;

  for (let fruit of fruits) {
    if (fruit === "kiwi") {
      kiwi++;
    } else if (fruit === "apple") {
      apple++;
    } else if (fruit === "orange") {
      orange++;
    }
  }
  return { kiwi, apple, orange };
};

console.log(countFruits(fruits));
