// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
// function solution(string) {

// }

// const solution = (string) => string.split(", ").join().toLowerCase();
// console.log(solution("helloWorld"));

// console.log("CamelCasing".split(" "));


const solution = (string) => {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += " " + string[i];
    } else {
      result += string[i];
    }
  }

  return result;
};

console.log(solution("helloWorld"));