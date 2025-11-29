/**
 * @param {number} n
 * @return {number[]}
 */
const evenOddBit = function (n) {
  const result = [0, 0];
  const str = n.toString(2);

  for (let i = 0; i < str.length; i++) {
    if (str[str.length - i - 1] !== '1') continue;
    result[i % 2]++;
  }

  return result;
};
