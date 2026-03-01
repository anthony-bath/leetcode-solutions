/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
const divisorSubstrings = function (num, k) {
  let count = 0;
  const numString = `${num}`;

  for (let i = 0; i + k <= numString.length; i++) {
    const subNum = Number(numString.substring(i, i + k));

    if (subNum && num % subNum === 0) {
      count++;
    }
  }

  return count;
};
