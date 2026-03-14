/**
 * @param {number[]} arr
 * @return {number}
 */
const minSetSize = function (arr) {
  const n = arr.length;
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const counts = [...map.values()].sort((a, b) => b - a);

  let count = 0;
  let total = 0;

  while (total < n / 2) {
    total += counts[count];
    count += 1;
  }

  return count;
};
