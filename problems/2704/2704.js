/**
 * @param {string} val
 * @return {Object}
 */
const expect = function (val) {
  return {
    toBe: function (other) {
      if (val === other) return true;
      throw new Error('Not Equal');
    },
    notToBe: function (other) {
      if (val !== other) return true;
      throw new Error('Equal');
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
