/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordLen = words[0].length;
  const len = words.length * wordLen;

  if (len > s) return [];

  const lookup = new Map();

  for (const word of words) {
    lookup.has(word) ? lookup.set(word, lookup.get(word) + 1) : lookup.set(word, 1);
  }

  const result = [];

  outer: for (let i = 0; i <= s.length - len; i++) {
    const substring = new Map();

    for (let j = i; j <= i + len - wordLen; j += wordLen) {
      const part = s.substring(j, j + wordLen);
      if (!lookup.has(part)) continue outer;
      substring.has(part) ? substring.set(part, substring.get(part) + 1) : substring.set(part, 1);
    }

    for (const [part, count] of substring) {
      if (lookup.get(part) !== count) continue outer;
    }

    result.push(i);
  }

  return result;
};
