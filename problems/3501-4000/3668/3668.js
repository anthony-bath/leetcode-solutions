/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
const recoverOrder = function (order, friends) {
  const friendSet = new Set(friends);

  return order.filter((id) => friendSet.has(id));
};
