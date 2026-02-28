/**
 * @param {string} s
 * @return {number[]}
 */
const diStringMatch = function (s) {
  let d = s.length;
  let i = 0;
  const result = [];

  for (const char of s) {
    if (char === 'I') {
      result.push(i++);
    } else {
      result.push(d--);
    }
  }

  result.push(i);

  return result;
};
