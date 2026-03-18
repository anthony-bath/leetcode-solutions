/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = function (arr, k) {
  const map = new Map();
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];

    if (seen.has(string)) continue;

    if (map.has(string)) {
      map.delete(string);
      seen.add(string);
      continue;
    }

    map.set(string, i);
  }

  if (map.size < k) return '';

  return [...map.keys()][k - 1];
};
