const { abs } = Math;

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = function (arr, a, b, c) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    const iv = arr[i];

    for (let j = i + 1; j < arr.length - 1; j++) {
      const jv = arr[j];

      if (abs(iv - jv) > a) continue;

      for (let k = j + 1; k < arr.length; k++) {
        const kv = arr[k];

        if (abs(jv - kv) <= b && abs(kv - iv) <= c) {
          count++;
        }
      }
    }
  }

  return count;
};
