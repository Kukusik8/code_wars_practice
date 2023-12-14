// Дан словарь из городов и дат выступлений рок - группы

// Необходимо преобразовать словать(key - value) в массив из названий городов

// Вывод городов должен быть в хронологическом порядке

// Города в которых концерт уже прошел нужно исключить

// Результат ['казань','Питер','Калининград']

const conserts = {
  Москва: new Date("2020-04-01"),
  Казань: new Date("2024-07-02"),
  Владивосток: new Date("2020-04-21"),
  Калининград: new Date("2024-07-15"),
  Омск: new Date("2020-04-18"),
  Питер: new Date("2024-07-10"),
};

function readyToContert(conserts) {
  return Object.keys(conserts)
    .filter((city) => conserts[city] > new Date())
    .sort((a, b) => {
      return conserts[a] - conserts[b];
    });
}

console.log(readyToContert(conserts));
