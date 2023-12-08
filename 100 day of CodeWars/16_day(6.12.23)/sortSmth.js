//Отсортировать массив элементы которого объекты
//Отсортировать по алфавиту (поле name)
const users = [
  {
    name: "John Doe",
    age: 120,
  },
  {
    name: "Alex Moren",
    age: 30,
  },
];

users.sort((u1, u2) => {
  //Использовали этот метод для работы со строками и чтобы регистры не промисывать
  return u1.name.localeCompare(u2.name);
});

console.log(users);
