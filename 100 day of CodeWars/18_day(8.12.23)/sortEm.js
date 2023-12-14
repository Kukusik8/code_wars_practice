// Создать функцию которая сгруппирует студентов по возрасту
// на выходе получить объект где ключ - возраст,
// а значение - массив студентов

const groupStudents = (list) => {
  const grouped = {};

  list.forEach((student) => {
    if (!grouped[student.age]) {
      grouped[student.age] = [s];
    } else {
    }
  });
};
