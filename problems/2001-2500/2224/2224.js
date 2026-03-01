/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = function (current, correct) {
  const [sh, sm] = current.split(':').map(Number);
  const [eh, em] = correct.split(':').map(Number);

  let diff = em - sm + 60 * (eh - sh);

  if (diff < 0) {
    diff = 24 * 60 + diff;
  }

  let ops = 0;
  let i = 0;
  const steps = [60, 15, 5, 1];

  while (diff > 0) {
    const div = Math.floor(diff / steps[i]);

    if (div > 0) {
      ops += div;
      diff -= div * steps[i];
    }

    i++;
  }

  return ops;
};
