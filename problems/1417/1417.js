/**
 * @param {string} s
 * @return {string}
 */
const reformat = function (s) {
  if (s.length === 1) return s;

  const digits = s.match(/\d/g) ?? [];
  const chars = s.match(/[^\d]/g) ?? [];

  if (digits.length === 0 || chars.length === 0 || Math.abs(digits.length - chars.length) > 1)
    return '';

  const output = chars.length > digits.length ? chars : digits;
  const other = chars.length > digits.length ? digits : chars;

  let i = 1;

  for (const val of other) {
    output.splice(i, 0, val);
    i += 2;
  }

  return output.join('');
};
