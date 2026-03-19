/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function (secret, guess) {
  const freq = Array(10).fill(0);
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    const g = +guess[i];
    const s = +secret[i];

    if (g === s) {
      bulls++;
    } else {
      if (freq[s]++ < 0) cows++;
      if (freq[g]-- > 0) cows++;
    }
  }

  return `${bulls}A${cows}B`;
};
