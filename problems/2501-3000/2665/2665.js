/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function (init) {
  return {
    init,
    value: init,
    increment: function () {
      this.value += 1;
      return this.value;
    },
    decrement: function () {
      this.value -= 1;
      return this.value;
    },
    reset: function () {
      this.value = init;
      return this.value;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
