/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
  const available = { 5: 0, 10: 0 };

  for (const bill of bills) {
    available[bill]++;

    switch (bill) {
      case 10:
        if (available[5] > 0) {
          available[5]--;
        } else {
          return false;
        }
        break;
      case 20:
        if (available[10] > 0 && available[5] > 0) {
          available[10]--;
          available[5]--;
        } else if (available[5] >= 3) {
          available[5] -= 3;
        } else {
          return false;
        }
    }
  }

  return true;
};
