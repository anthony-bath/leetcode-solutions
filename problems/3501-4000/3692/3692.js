/**
 * @param {string} s
 * @return {string}
 */
const majorityFrequencyGroup = function (s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  const groups = new Map();
  let [maxFreq, maxGroupSize] = [0, 0];
  let result = null;

  for (const [char, freq] of map) {
    if (!groups.has(freq)) {
      groups.set(freq, [char]);
    } else {
      groups.get(freq).push(char);
    }

    const group = groups.get(freq);

    if (group.length < maxGroupSize) {
      continue;
    }

    if (group.length > maxGroupSize || (group.length === maxGroupSize && freq > maxFreq)) {
      maxFreq = freq;
      maxGroupSize = group.length;
      result = group;
    }
  }

  return result.join('');
};
