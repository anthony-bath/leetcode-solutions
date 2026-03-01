/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  if (s.length === 1) return s;

  const expr = `(${Array.from({ length: 26 }, (_, i) => 65 + i)
    .map(
      (capital) =>
        `${String.fromCharCode(capital)}${String.fromCharCode(capital + 32)}|${String.fromCharCode(
          capital + 32
        )}${String.fromCharCode(capital)}`
    )
    .join('|')})`;

  let match = s.match(expr);

  while (match) {
    s = s.replace(match[0], '');
    match = s.match(expr);
  }

  return s;
};
