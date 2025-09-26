/**
 * @param {string} s
 * @return {string}
 */
const greatestLetter = function (s) {
  const chars = new Set(s.split('').map((c) => c.charCodeAt(0)));

  for (let code = 90; code >= 65; code--) {
    if (chars.has(code) && chars.has(code + 32)) {
      return String.fromCharCode(code);
    }
  }

  return '';
};
