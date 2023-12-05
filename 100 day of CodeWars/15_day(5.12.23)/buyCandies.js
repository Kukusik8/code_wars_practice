//У нас есть n денег. Какое максимальное количество конфет можно купить arr=[p1,p2,p3]
// где p - цена за конфету

function buyCandies(n, arr) {
  let sum = 0;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (n - arr[i] >= 0) {
      sum++;
      n = n - arr[i];
    } else break;
  }
  return sum;
}
console.log(buyCandies(10, [1, 2, 3, 4, 5]));
