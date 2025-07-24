/**
 * @param {string[]} words
 * @return {number}
 */
const similarPairs = function (words) {
  const groups = new Map();

  for (const word of words) {
    // Create bit mask representing character presence
    let mask = 0;
    for (const char of word) {
      mask |= 1 << (char.charCodeAt(0) - 97);
    }

    groups.set(mask, (groups.get(mask) || 0) + 1);
  }

  let count = 0;
  for (const groupSize of groups.values()) {
    if (groupSize > 1) {
      count += (groupSize * (groupSize - 1)) / 2;
    }
  }

  return count;
};

// Original approach
/*
var similarPairsOriginal = function (words) {
  const lookup = {};

  function getSet(index) {
    let set;

    if (index in lookup) {
      set = lookup[index];
    } else {
      set = new Set(words[index]);
      lookup[index] = set;
    }

    return set;
  }

  let count = 0;

  for (let i = 0; i < words.length - 1; i++) {
    const iSet = getSet(i);

    for (let j = i + 1; j < words.length; j++) {
      const jSet = getSet(j);

      if (iSet.size !== jSet.size) continue;

      const union = iSet.union(jSet);

      if (union.size === iSet.size) {
        count++;
      }
    }
  }

  return count;
};
*/
