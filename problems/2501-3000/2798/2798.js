/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
const numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.filter((h) => h >= target).length;
};
