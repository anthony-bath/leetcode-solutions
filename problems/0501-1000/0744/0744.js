/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
  for (const letter of letters) {
    if (letter > target) return letter;
  }

  return letters[0];
};
