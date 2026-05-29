/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
const toggleLightBulbs = function (bulbs) {
  const state = Array(101).fill(0);

  for (const bulb of bulbs) {
    state[bulb] ^= 1;
  }

  const on = [];

  for (let bulb = 1; bulb <= 100; bulb++) {
    if (state[bulb] === 1) {
      on.push(bulb);
    }
  }

  return on;
};
