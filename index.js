// // const obj = {
// //   x: 10,
// //   y: 20,
// // };

// // const prop = Object.keys(obj).reverse().join("");

// // obj.xy = 30;
// // obj.yx = 40;
// // obj.x10y20 = 50;
// // obj.y20x10 = 60;

// // const result = obj[prop];

// // console.log(result);

// // const s1 = ["a", "b", "c"];
// // const s2 = ["d", "e", "f"];

// // const result = s1.concat(s2).join("+");

// // console.log(result);
// const result = [5, 7, 9].slice(1);

// result.pop();
// result.push(4);

// console.log(result);

// let obj = {
//   0: 1,
//   0: 2,
// };
// console.log(obj["0"] + obj[0]);

// var nyc = {
//   fullName: "New York City",
//   mayor: "Bill de Blasio",
//   population: 8000000,
//   boroughs: 5,
// };

// // for (var i in nyc) console.log(nyc[i]);

// // for (var i in nyc) console.log(nyc.i);

// for (var i in nyc) console.log(nyc.i);
const itemCart = { product: "Socks", quantity: 3 };

const newObj = {};
Object.assign(newObj, itemCart);

console.log("product" in newObj);
