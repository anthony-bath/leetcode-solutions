/**
 * @param {string[]} words
 * @return {string}
 */
const oddString = function (words) {
  const getDiffString = (word) => {
    let result = '';
    for (let i = 1; i < word.length; i++) {
      result += word.charCodeAt(i) - word.charCodeAt(i - 1) + ',';
    }
    return result;
  };

  const diff1 = getDiffString(words[0]);
  const diff2 = getDiffString(words[1]);
  const diff3 = getDiffString(words[2]);

  if (diff1 === diff2) {
    if (diff1 !== diff3) return words[2];
    for (let i = 3; i < words.length; i++) {
      if (getDiffString(words[i]) !== diff1) {
        return words[i];
      }
    }
  } else if (diff1 === diff3) {
    return words[1];
  } else {
    return words[0];
  }
};
