// Given a string, you have to return a string in which
// each character(case -sensitive) is repeated once
// У вас есть строка, и вам нужно вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
// * "String"      -> "SSttrriinngg"

const doubleChar = (str) => {
  let arr = str.split("");
  let res = [...new Set(arr)];

  return res.join('');
};
console.log(doubleChar("hello"));
