/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
const memLeak = function (memory1, memory2) {
  let t = 1;

  while (t <= memory1 || t <= memory2) {
    if (memory2 > memory1 && t <= memory2) {
      memory2 -= t;
    } else {
      memory1 -= t;
    }

    t += 1;
  }

  return [t, memory1, memory2];
};
