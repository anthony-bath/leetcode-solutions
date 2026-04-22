/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const lookup = {};

  for (const item of arr1) {
    lookup[item.id] = item;
  }

  for (const item of arr2) {
    lookup[item.id] = Object.assign(lookup[item.id] ?? {}, item);
  }

  return Object.values(lookup).sort((a, b) => a.id - b.id);
};
