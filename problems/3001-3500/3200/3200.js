const { max } = Math;

/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
const maxHeightOfTriangle = function (red, blue) {
  return max(getHeight(red, blue), getHeight(blue, red));
};

function getHeight(top, other) {
  let [height, required, turn] = [0, 1, true];

  while (true) {
    if (turn) {
      if (top >= required) {
        top -= required;
      } else {
        break;
      }
    } else {
      if (other >= required) {
        other -= required;
      } else {
        break;
      }
    }

    required += 1;
    height += 1;
    turn = !turn;
  }

  return height;
}
