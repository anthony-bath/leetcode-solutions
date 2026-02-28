const MORSE_MAP = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  return new Set(
    words.map((word) =>
      word
        .split('')
        .map((l) => MORSE_MAP[l.charCodeAt(0) - 97])
        .join('')
    )
  ).size;
};
