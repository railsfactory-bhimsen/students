const students = require('./data/students')
const student_details = (student) => {
  const { english, science, social } = student.marks;
  return `id: ${student.id}, name: ${student.name}, english: ${english}, science: ${science}, social: ${social}`;
};

const logResult = (result) => console.log(result);

const main = () => {
  students.map(student_details).map(logResult);
};

main();
