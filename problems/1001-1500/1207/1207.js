/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const freq = new Map();

  for (const num of arr) {
    if (!freq.has(num)) {
      freq.set(num, 1);
    } else {
      freq.set(num, freq.get(num) + 1);
    }
  }

  const seen = new Set();

  for (const [_, count] of freq) {
    if (seen.has(count)) return false;
    seen.add(count);
  }

  return true;
};
