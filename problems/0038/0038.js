/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const expr = /(\d)\1{0,}/g;

  function lookAndSay(sequence) {
    return sequence
      .match(expr)
      .map((match) => `${match.length}${match[0]}`)
      .join('');
  }

  let sequence = '1';

  for (let i = 1; i < n; i++) {
    sequence = lookAndSay(sequence);
  }

  return sequence;
};
