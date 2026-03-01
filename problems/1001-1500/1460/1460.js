/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function (target, arr) {
  const freq = {};

  for (let i = 0; i < target.length; i++) {
    freq[target[i]] = (freq[target[i]] ?? 0) + 1;
    freq[arr[i]] = (freq[arr[i]] ?? 0) - 1;
  }

  return Object.values(freq).every((val) => val === 0);
};
