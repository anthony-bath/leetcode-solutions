/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const rows = [/[qwertyuiop]/gi, /[asdfghjkl]/gi, /[zxcvbnm]/gi];
  const result = [];

  for (const word of words) {
    if (
      rows.some((exp) => {
        const match = word.match(exp);
        return match && match.length === word.length;
      })
    ) {
      result.push(word);
    }
  }

  return result;
};
