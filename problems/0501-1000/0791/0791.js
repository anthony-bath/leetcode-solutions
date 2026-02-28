/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
const customSortString = function (order, s) {
  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  let result = '';

  for (const char of order) {
    if (count.has(char)) {
      result += char.repeat(count.get(char));
      count.delete(char);
    }
  }

  for (const [char, freq] of count) {
    result += char.repeat(freq);
  }

  return result;
};
