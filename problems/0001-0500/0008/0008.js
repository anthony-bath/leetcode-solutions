/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  s = s.trim();
  if (s.length === 0) return 0;

  let i = 0;
  let sign = 1;

  if (s[0] === '+') i++;
  if (s[0] === '-') {
    sign = -1;
    i++;
  }

  let result = 0;

  while (i < s.length && /\d/.test(s[i])) {
    result = result * 10 + Number(s[i++]);
  }

  result *= sign;

  return Math.max(Math.min(result, 2 ** 31 - 1), -1 * 2 ** 31);
};
