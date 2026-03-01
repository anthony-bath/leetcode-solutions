/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
const minimumBoxes = function (apple, capacity) {
  const apples = apple.reduce((sum, num) => sum + num, 0);

  capacity.sort((a, b) => b - a);

  let space = 0;

  for (let i = 0; i < capacity.length; i++) {
    space += capacity[i];

    if (space >= apples) {
      return i + 1;
    }
  }

  return capacity.length;
};
