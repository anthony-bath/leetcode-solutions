/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function (arr) {
  if (arr.length < 4) return arr[0];

  const min = arr.length / 4;

  let count = 0;
  let current = null;

  for (const num of arr) {
    if (current !== num) {
      current = num;
      count = 1;
      continue;
    }

    if (++count > min) {
      return num;
    }
  }

  return current;
};
