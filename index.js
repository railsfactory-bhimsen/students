const students = require('./data/students');

const student_details = (student) => {
  const { english, science, social } = student.marks;
  const totalMark = student.totalMark;
  return `id: ${student.id}, name: ${student.name}, english: ${english}, science: ${science}, social: ${social}, total: ${totalMark}`;
};

const logResult = (result) => console.log(result);

const calculateTotal = (student) => {
  student.totalMark = student.marks.english + student.marks.science + student.marks.social;
  return student;
};

const main = () => {
  return students
    .map(calculateTotal)
    .map(student_details)
    .map(logResult);
};

main();
