/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  let currentMax = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = currentMax;

    if (curr > currentMax) {
      currentMax = curr;
    }
  }

  return arr;
};
