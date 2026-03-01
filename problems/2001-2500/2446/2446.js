/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
const haveConflict = function (event1, event2) {
  const [e1s, e1e] = event1.map(toDecimal);
  const [e2s, e2e] = event2.map(toDecimal);

  if (e1s < e2s) {
    return e1e >= e2s;
  }

  if (e2s < e1s) {
    return e2e >= e1s;
  }

  return true;
};

function toDecimal(time) {
  const [hour, minute] = time.split(':').map(Number);
  return hour + minute / 60;
}
