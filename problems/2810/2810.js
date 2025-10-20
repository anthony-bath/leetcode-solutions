/**
 * @param {string} s
 * @return {string}
 */
const finalString = function (s) {
  const result = [];

  for (const char of s) {
    if (char === 'i') {
      result.reverse();
      continue;
    }

    result.push(char);
  }

  return result.join('');
};
