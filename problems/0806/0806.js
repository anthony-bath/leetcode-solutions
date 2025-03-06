/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = function (widths, s) {
  let line = 1;
  let width = 0;

  for (let i = 0; i < s.length; i++) {
    const charWidth = widths[s.charCodeAt(i) - 97];

    if (width + charWidth <= 100) {
      width += charWidth;
    } else {
      line += 1;
      width = charWidth;
    }
  }

  return [line, width];
};
