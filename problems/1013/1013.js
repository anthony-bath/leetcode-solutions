/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = function (arr) {
  const target = arr.reduce((a, c) => a + c, 0) / 3;

  let total = 0;
  let sections = 0;

  for (const num of arr) {
    total += num;

    if (total === target) {
      if (++sections === 3) return true;
      total = 0;
    }
  }

  return false;
};
