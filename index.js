const students = require('./data/students');

const student_details = (student) => {
  const { english, science, social } = student.marks;

  return `id: ${student.id}, name: ${student.name}, english: ${english}, science: ${science}, social: ${social}, total: ${student.totalMarks}, isPassed: ${student.isPassed}`;
};

const logResult = (result) => console.log(result);

const isPassed = (student) => {
  return ({
    ...student,
    isPassed: Object.values(student.marks).every(mark => mark > 40)
  });
}

const calculateTotal = (student) => {
  return ({
    ...student,
    totalMarks: Object.values(student.marks).reduce((mark, acc) => mark + acc, 0)
  });
};

const main = () => {
  return students
    .map(calculateTotal)
    .map(isPassed)
    .map(student_details)
    .map(logResult);
};

main();
