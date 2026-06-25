/**
 * @param {number[]} mountain
 * @return {number[]}
 */
const findPeaks = function (mountain) {
  const result = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i - 1] >= mountain[i]) continue;
    if (mountain[i + 1] >= mountain[i]) continue;

    result.push(i);
  }

  return result;
};
