/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
  const result = [];

  arr.forEach((element, i) => {
    if (fn(element, i)) {
      result.push(element);
    }
  });

  return result;
};
