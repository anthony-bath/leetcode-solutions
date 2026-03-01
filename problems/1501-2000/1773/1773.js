/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function (items, ruleKey, ruleValue) {
  const targetIndex = { type: 0, color: 1, name: 2 }[ruleKey];
  return items.filter((item) => item[targetIndex] === ruleValue).length;
};
