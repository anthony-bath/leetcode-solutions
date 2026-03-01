const { min } = Math;

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);

  if (arr.length === 2) return [arr];

  let minDiff = Infinity;
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    const l = arr[i - 1];
    const r = arr[i];
    const diff = r - l;

    if (diff < minDiff) {
      result = [[l, r]];
      minDiff = diff;
    } else if (diff === minDiff) {
      result.push([l, r]);
    }
  }

  return result;
};
