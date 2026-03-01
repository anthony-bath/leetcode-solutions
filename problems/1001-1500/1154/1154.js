/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = function (date) {
  const [year, month, day] = date.split('-').map(Number);

  if (month === 1) return day;

  const isLeapYear = checkIsLeapYear(year);

  const daysByMonth = [
    31,
    isLeapYear ? 60 : 59,
    isLeapYear ? 91 : 90,
    isLeapYear ? 121 : 120,
    isLeapYear ? 152 : 151,
    isLeapYear ? 182 : 181,
    isLeapYear ? 213 : 212,
    isLeapYear ? 244 : 243,
    isLeapYear ? 274 : 273,
    isLeapYear ? 305 : 304,
    isLeapYear ? 335 : 334,
  ];

  return daysByMonth[month - 2] + day;
};

function checkIsLeapYear(year) {
  if (year % 4 !== 0) return false;
  if (year % 100 === 0 && year % 400 !== 0) return false;

  return true;
}
