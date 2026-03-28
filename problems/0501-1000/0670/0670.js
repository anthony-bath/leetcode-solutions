/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = function (num) {
  const digits = `${num}`.split('').map(Number);
  const last = new Array(10).fill(-1);

  for (let i = 0; i < digits.length; i++) {
    last[digits[i]] = i;
  }

  for (let i = 0; i < digits.length; i++) {
    for (let n = 9; n > digits[i]; n--) {
      if (last[n] > i) {
        [digits[i], digits[last[n]]] = [digits[last[n]], digits[i]];
        return Number(digits.join(''));
      }
    }
  }

  return num;
};
