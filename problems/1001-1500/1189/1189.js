const { floor, min } = Math;

/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function (text) {
  if (text.length < 7) return false;

  const freq = [0, 0, 0, 0, 0];

  for (const char of text) {
    switch (char) {
      case 'b':
        freq[0]++;
        break;
      case 'a':
        freq[1]++;
        break;
      case 'l':
        freq[2]++;
        break;
      case 'o':
        freq[3]++;
        break;
      case 'n':
        freq[4]++;
    }
  }

  if (freq.some((c) => c === 0)) return 0;

  freq[2] = floor(freq[2] / 2);
  freq[3] = floor(freq[3] / 2);

  return min(...freq);
};
