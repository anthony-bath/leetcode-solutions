/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {
  const map = arr2.reduce((map, val, i) => map.set(val, i), new Map());
  const len = arr2.length;

  return arr1.sort((a, b) => {
    a = map.get(a) ?? len + a;
    b = map.get(b) ?? len + b;

    return a - b;
  });
};
