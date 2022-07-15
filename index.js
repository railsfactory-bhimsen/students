const data = require('./data/students');

const capitalizeString = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const formatStudents = ({isPassed, marks, ...rest}) => {
  const student = {...rest, result: isPassed ? 'Pass' : 'Fail'};
  return Object.keys(student).reduce((acc, key) => {
    acc[capitalizeString(key)] = student[key];
    return acc;
  } ,{});
};

const computeMarks = (student) => {
  return ({
    ...student,
    total: Object.values(student.marks).reduce((mark, acc) => mark + acc, 0),
    isPassed: Object.values(student.marks).every(mark => mark > 40)
  });
};

const printStudentDetails = (students) => {
  transformed = students.map(({marks, ...rest}) => ({ ...rest, ...marks })).map(formatStudents);
  console.table(transformed);
};

const assignRanks = (students) => {
  const passedStudents = students.filter(student => student.isPassed );
  const failedStudents = students.filter(student => !student.isPassed );

  rankedPassedStudents = passedStudents
    .sort((a,b) => b.total - a.total)
    .map((student, index) => ({...student, rank: index + 1}));

  return rankedPassedStudents.concat(failedStudents);
};

const processStudentMarks = (students) => {
  return students.map(computeMarks);
};

const main = () => {
  const processedStudentsDetails = processStudentMarks(data);
  const studentsWithRanks = assignRanks(processedStudentsDetails);
  return printStudentDetails(studentsWithRanks);
};

main();
