/**
 * @param {string} s
 * @return {boolean}
 */
const checkOnesSegment = function (s) {
  return s.split(/0{1,}/).filter((x) => x).length === 1;
};
