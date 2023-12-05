// дается массив из 0 и 1 найти макс длину подмассива которая состоит только из нулей или единиц
// подмассив это непрервывная часть массива, то есть которая состоит из одинаковых  элементов
// пример arr=[1,1,1,0,1,0] 3 единицы подряд это подмассив по сути они все подмассивы просто мы ищем с максимальной длиной

function maxSubArrLength(arr) {
  let maxLength = 0;
  let thisLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      thisLength++;
    } else {
      thisLength = 0;
    }
    if (thisLength > maxLength) {
      maxLength = thisLength;
    }
  }
  return maxLength;
}

console.log(maxSubArrLength([0, 0, 0, 1, 0, 0, 1]));
