// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  let arr = n.toString().split("");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(parseInt(arr[i]));
  }

  return res.reverse();
}

console.log(digitize(231));
