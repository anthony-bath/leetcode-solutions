/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    const x = stones.pop();
    const y = stones.pop();

    if (x === y) continue;

    const z = x - y;
    let pos = 0;

    while (z > stones[pos]) {
      pos++;
    }

    stones.splice(pos, 0, z);
  }

  return stones.length ? stones[0] : 0;
};
