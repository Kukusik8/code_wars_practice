//  If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}

console.log(pickIt([12, 3, 4]));
