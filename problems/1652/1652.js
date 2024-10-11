/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
  const len = code.length;

  if (k === 0) {
    return Array(len).fill(0);
  }

  const steps = Math.abs(k);

  return code.map((num, i) => {
    let newValue = 0;

    for (let step = 1; step <= steps; step++) {
      const next = k > 0 ? (i + step) % len : (i - step + len) % len;
      newValue += code[next];
    }

    return newValue;
  });
};
