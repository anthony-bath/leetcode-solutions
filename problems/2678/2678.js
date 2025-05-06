/**
 * @param {string[]} details
 * @return {number}
 */
const countSeniors = function (details) {
  return details.filter((d) => d.substring(11, 13) > '60').length;
};
