/**
 * @param {number} n
 * @return {number}
 */
const removeZeros = function (n) {
  return Number(
    `${n}`
      .split('')
      .filter((d) => d !== '0')
      .join('')
  );
};
