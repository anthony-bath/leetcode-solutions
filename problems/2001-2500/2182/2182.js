/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
const repeatLimitedString = function (s, repeatLimit) {
  const bank = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    bank[s.charCodeAt(i) - 97] += 1;
  }

  let result = '';
  let last = null;

  for (let i = bank.length - 1; i >= 0; ) {
    if (bank[i] === 0) {
      i--;
      continue;
    }

    const count = Math.min(repeatLimit, bank[i]);

    bank[i] -= count;
    result += String.fromCharCode(i + 97).repeat(count);

    if (bank[i] > 0) {
      let j = i - 1;
      while (j >= 0 && bank[j] === 0) j--;
      if (j < 0) break;

      result += String.fromCharCode(j + 97);
      bank[j] -= 1;
    } else {
      i--;
    }
  }

  return result;
};
