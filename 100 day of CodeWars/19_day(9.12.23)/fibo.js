// 1,1,2,3,5

const fibonacci = (n) => {
  if (n < 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6));
