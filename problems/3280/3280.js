/**
 * @param {string} date
 * @return {string}
 */
const convertDateToBinary = function (date) {
  return date
    .split('-')
    .map((part) => Number(part).toString(2))
    .join('-');
};
