/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = function (coordinates) {
  let [xr, yr] = coordinates.split('');
  const x = Number(xr.charCodeAt(0)) - 96;
  const y = Number(yr);

  return (x + y) % 2;
};
