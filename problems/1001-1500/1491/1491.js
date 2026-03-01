/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
  salary.sort((a, b) => a - b);

  return sum(salary.slice(1, salary.length - 1)) / (salary.length - 2);
};

function sum(array) {
  return array.reduce((total, sal) => sal + total, 0);
}
