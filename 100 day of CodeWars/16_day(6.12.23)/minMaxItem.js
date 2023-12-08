function minOrMax(arr) {
  let maxi = arr[0];
  for (let index = 0; index < arr.length; index++) {
    // if (arr[index] > maxi) {
    //   maxi = arr[index];
    // }
    // maxi = arr[index] > maxi ? arr[index] : maxi;
    // maxi = Math.max(arr[index], maxi);
  }
  return maxi;
}

console.log(minOrMax([1, 2, 3]));
