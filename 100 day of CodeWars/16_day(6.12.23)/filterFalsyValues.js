//Отфильтровать фолси значения
const arr = [7, "correct", 0, false, 9, NaN, ""];

// const notFalsy = [];

// for (let i = 0; i < arr.length; i++){
//     if (!!arr[i]) {
//         notFalsy.push(arr[i])
//     }
// }

//либо просто filter
// !!если хотим привести к булевому значению
res = arr.filter((el) => !!el);
console.log(res);
