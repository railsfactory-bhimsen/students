const data = require('./data/students');

const studentDetails = (student) => {
  const { english, science, social } = student.marks;

  return `id: ${student.id}, name: ${student.name}, english: ${english}, science: ${science}, social: ${social}, total: ${student.totalMarks}, Result: ${student.isPassed ? "P" : "F"}`;
};

const logResult = (result) => console.log(result);

const computeResult = (student) => {
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

const processStudentMarks = () => {
  return data
    .map(calculateTotal)
    .map(computeResult);
};

const printStudentDetails = (students) => {
  return students
    .map(studentDetails)
    .map(logResult);
};

const main = () => {
  const processedStudentsDetails = processStudentMarks();
  return printStudentDetails(processedStudentsDetails);
};

main();
