/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
const alertNames = function (keyName, keyTime) {
  const lookup = new Map();

  for (let i = 0; i < keyName.length; i++) {
    const name = keyName[i];

    if (!lookup.has(name)) {
      lookup.set(name, []);
    }

    const [hour, minute] = keyTime[i].split(':').map(Number);

    lookup.get(name).push(hour * 60 + minute);
  }

  const result = [];

  for (const [name, times] of lookup) {
    if (times.length < 3) continue;
    times.sort((a, b) => a - b);

    for (let i = 2; i < times.length; i++) {
      if (times[i] - times[i - 2] <= 60) {
        result.push(name);
        break;
      }
    }
  }

  return result.sort();
};
