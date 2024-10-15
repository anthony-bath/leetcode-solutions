/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function (students, sandwiches) {
  let count = 0;

  while (students.length) {
    if (count === students.length) {
      return count;
    }

    const student = students.shift();

    if (sandwiches[0] === student) {
      sandwiches.shift();
      count = 0;
    } else {
      students.push(student);
      count++;
    }
  }

  return 0;
};
