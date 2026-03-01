/**
 * @param {string} date
 * @return {string}
 */
const reformatDate = function (date) {
  return new Date(date.replace(/(rd|th|st|nd)/, '').replace(/\s(\d)/, ', $1'))
    .toISOString()
    .split('T')[0];
};
