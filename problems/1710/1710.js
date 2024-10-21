const { min } = Math;

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort(([c1, u1], [c2, u2]) => u2 - u1);

  let units = 0;
  let currentBox = 0;

  while (truckSize > 0 && currentBox < boxTypes.length) {
    const [boxes, unitsPerBox] = boxTypes[currentBox];
    const take = min(boxes, truckSize);

    truckSize -= take;
    units += take * unitsPerBox;

    if (take === boxes) {
      currentBox++;
    }
  }

  return units;
};
