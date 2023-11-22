// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because

const squareSum = (numbers) => {
  return numbers.reduce((acc, curr) =>{
    return acc + curr * curr;
  }, 0);
};

console.log(squareSum([1, 2, 2]));
