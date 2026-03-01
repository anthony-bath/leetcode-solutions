/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = function (s) {
  if (s.length < 3) return s;

  let result = `${s[0]}`;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i] && s[i] === s[i + 1]) {
      continue;
    } else {
      result += s[i];
    }
  }

  return result;
};
