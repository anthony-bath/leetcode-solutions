/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function (words, maxWidth) {
  const lines = [];
  let lineWords = [];
  let lineWordsLength = 0;

  for (const word of words) {
    if (lineWordsLength + word.length + lineWords.length <= maxWidth) {
      lineWords.push(word);
      lineWordsLength += word.length;
    } else {
      // Can't fit any more words in this line

      if (lineWords.length === 1) {
        // Only one word in this line
        lines.push(`${lineWords[0]}${' '.repeat(maxWidth - lineWordsLength)}`);
      } else {
        const totalSpaces = maxWidth - lineWordsLength;
        const spacesBetweenWords = Math.floor(totalSpaces / (lineWords.length - 1));
        const spaces = Array(lineWords.length - 1).fill(spacesBetweenWords);
        const extraSpaces = totalSpaces % (lineWords.length - 1);

        if (extraSpaces) {
          for (let i = 0; i < extraSpaces; i++) {
            spaces[i]++;
          }
        }

        let line = ``;

        for (let i = 0; i < lineWords.length; i++) {
          line += lineWords[i];

          if (i < lineWords.length - 1) {
            line += ' '.repeat(spaces[i]);
          }
        }

        lines.push(line);
      }

      lineWords = [word];
      lineWordsLength = word.length;
    }
  }

  if (lineWords.length) {
    lines.push(
      `${lineWords.join(' ')}${' '.repeat(maxWidth - lineWordsLength - lineWords.length + 1)}`
    );
  }

  return lines;
};
