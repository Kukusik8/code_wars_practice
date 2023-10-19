// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object)
//  and returns the maximum number of cakes Pete can bake(integer).
//  For simplicity there are no units for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.

// must return 2
// cakes({ flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
// must return 0
// cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 });

function cakes(recipe, available) {
  //Создали массив для хранения доступных количеств ингредиентов
  let amount = [];

  //Иттерируем по каждому ингредиенту в рецепте
  for (let ingredients in recipe) {
    //Проверяем есть ли ингредиенты в доступных ингедиентах
    if (available.hasOwnProperty(ingredients)) {
      // Вычисляем доступное количество ингредиента, разделив
      // количество доступного ингредиента на требуемое количество по рецепту

      let quantity = Math.floor(available[ingredients] / recipe[ingredients]);
      // Добавляем доступное количество ингредиента в массив quantities
      amount.push(quantity);
    } else {
      // Если ингредиента нет в доступных ингредиентах, добавляем 0 в массив quantities
      amount.push(0);
    }
  }

  //Возвращаем минимальное количество в массив (amount)
  return Math.min.apply(null, amount);
}
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);


//еще одни варианты решения
// function cakes(recipe, available) {
//   return Object.keys(recipe).reduce(function (val, ingredient) {
//     return Math.min(
//       Math.floor(available[ingredient] / recipe[ingredient] || 0),
//       val
//     );
//   }, Infinity);
// }