const { abs } = Math;

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;

  outer: for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (abs(arr1[i] - arr2[j]) <= d) continue outer;
    }

    count++;
  }

  return count;
};
