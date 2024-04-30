/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const words = s.split(' ');
  let result = '';

  function reverse(w) {
    let output = '';

    for (let i = w.length - 1; i >= 0; i--) {
      output += w[i];
    }

    return output;
  }

  for (const word of words) {
    result += `${reverse(word)} `;
  }

  return result.trimEnd();
};
