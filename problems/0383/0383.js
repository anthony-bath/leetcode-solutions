/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  if (magazine.length > ransomNote.length) {
    return false;
  }

  const letters = magazine.split('').reduce((lookup, letter) => {
    if (lookup[letter]) {
      lookup[letter]++;
    } else {
      lookup[letter] = 1;
    }

    return lookup;
  }, {});

  for (const letter of ransomNote.split('')) {
    if (letters[letter]) {
      letters[letter]--;
    } else {
      return false;
    }
  }

  return true;
};
