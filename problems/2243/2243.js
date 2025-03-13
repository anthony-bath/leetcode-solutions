/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = function (s, k) {
  let result = s;

  while (result.length > k) {
    const parts = [];

    for (let i = 0; i < result.length; i += k) {
      parts.push(result.substring(i, i + k));
    }

    result = parts.reduce(
      (next, part) => (next += [...part].map(Number).reduce((sum, num) => sum + num, 0)),
      ''
    );
  }

  return result;
};
