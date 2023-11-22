function removeChar(str) {
  let arr = str.slice(1);
  let res = arr.slice(0, arr.length - 1);
  return res;
}

console.log(removeChar("asb"));
