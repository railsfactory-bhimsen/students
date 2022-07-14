const data = require('./data/students');

const studentDetails = (student) => {
  const { english, science, social } = student.marks;

  // return `id: ${student.id}, name: ${student.name}, english: ${english}, science: ${science}, social: ${social}, total: ${student.totalMarks}, result: ${student.isPassed ? "P" : "F"}, rank: ${student.rank || "F"}`;
  return {
    id: student.id,
    name: student.name,
    english: english,
    science: science,
    social: social,
    total: student.totalMarks,
    result: student.isPassed ? "P" : "F",
    rank: student.rank || "F"
  };
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

const processStudentMarks = (studentMarks) => {
  return studentMarks
    .map(calculateTotal)
    .map(computeResult);
};

const printStudentDetails = (students) => {
  // students
  //   .map(studentDetails)
  //   .map(logResult);
  console.table(students.map(studentDetails));
};

const assignRanks = (students) => {
  const passedStudents = students.filter(student => student.isPassed );
  const failedStudents = students.filter(student => !student.isPassed );

  rankedPassedStudents = passedStudents
    .sort((a,b) => b.totalMarks - a.totalMarks)
    .map((student, index) => ({...student, rank: index + 1}));

  return rankedPassedStudents.concat(failedStudents);
};

const main = () => {
  const processedStudentsDetails = processStudentMarks(data);
  const studentsWithRanks = assignRanks(processedStudentsDetails);
  return printStudentDetails(studentsWithRanks);
};

main();
