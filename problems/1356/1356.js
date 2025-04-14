/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function (arr) {
  return arr.sort((a, b) => {
    const ac = countSetBits(a);
    const bc = countSetBits(b);

    if (ac === bc) {
      return a - b;
    }

    return ac - bc;
  });
};

function countSetBits(num) {
  let count = 0;

  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }

  return count;
}
