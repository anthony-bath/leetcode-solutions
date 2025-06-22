/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
const generateKey = function (num1, num2, num3) {
  let result = '';

  const num1Padded = `${num1}`.padStart(4, '0');
  const num2Padded = `${num2}`.padStart(4, '0');
  const num3Padded = `${num3}`.padStart(4, '0');

  for (let i = 0; i < 4; i++) {
    result += Math.min(num1Padded[i], num2Padded[i], num3Padded[i]);
  }

  return Number(result);
};
