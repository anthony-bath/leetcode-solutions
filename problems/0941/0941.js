/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  if (arr[1] < arr[0]) return false;

  let increasing = true;
  let transitions = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return false;

    if (increasing) {
      if (arr[i] < arr[i - 1]) {
        increasing = false;
        transitions++;

        if (transitions > 1) return false;
      }
    } else {
      if (arr[i] > arr[i - 1]) return false;
    }
  }

  return transitions === 1;
};
