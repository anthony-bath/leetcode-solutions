/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  citations.sort((a, b) => b - a);

  let result = 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= result) break;

    result += 1;
  }

  return result;
};
