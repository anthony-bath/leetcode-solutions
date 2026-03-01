const { min, floor } = Math;

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
const distMoney = function (money, children) {
  money -= children;

  if (money < 0) {
    return -1;
  }

  const div = floor(money / 7);

  if (div === children && money % 7 === 0) {
    return children;
  }

  if (div === children - 1 && money % 7 === 3) {
    return children - 2;
  }

  return min(children - 1, div);
};
