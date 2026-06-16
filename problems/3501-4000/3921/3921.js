/**
 * @param {string[]} events
 * @return {number[]}
 */
const scoreValidator = function (events) {
  let [score, counter] = [0, 0];

  outer: for (const event of events) {
    switch (event) {
      case 'W':
        counter += 1;
        if (counter === 10) break outer;
        break;

      case 'WD':
      case 'NB':
        score += 1;
        break;

      default:
        score += Number(event);
    }
  }

  return [score, counter];
};
