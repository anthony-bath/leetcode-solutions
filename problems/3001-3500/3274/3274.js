/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
const checkTwoChessboards = function (coordinate1, coordinate2) {
  return isWhite(coordinate1) === isWhite(coordinate2);
};

const isWhite = (coord) => {
  const x = Number(coord.charCodeAt(0)) - 96;
  const y = Number(coord[1]);

  return (x + y) % 2 === 0;
};
