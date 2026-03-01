/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function (num) {
  const [a, b, c, d] = `${num}`.split('').sort();

  return Number(`${a}${c}`) + Number(`${b}${d}`);
};
