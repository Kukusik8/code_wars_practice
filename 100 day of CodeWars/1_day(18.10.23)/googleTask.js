// В первом тестовом задании от Google необходимо написать функцию,
// которая станет проходить через массив, состоящий из целых чисел,
// Выводя индекс каждого элемента, \
// причем делая это с 3 - секундной задержкой.

// const getIndex = (arr) => {
//   setTimeout(() => {
//     arr.map((item, index) => {
//       console.log(index);
//     });
//   },3000);

//   return arr;
// };

// getIndex([1, 2, 3]);
//Мое решение выше: проблема в том что выводятся все сразу элементы с задержкой 3 сек. А нужно чтобы между каждым выводом индекса было 3 сек.

const getIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 3000);
  }
};

getIndex([1, 2, 3]);
