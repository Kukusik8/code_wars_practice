function giveMeFive(obj) {
  let arr = [];
  for (let item of obj) {
    if (item.length === 5) {
      arr.push(item);
    }
  }
  return arr;
}

console.log(giveMeFive({}));
