/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = function (s) {
  let result = '';

  for (const char of s) {
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
    } else {
      result += char;
    }
  }

  return result;
};
