/**
 * @return {Generator<number>}
 */
const fibGenerator = function* () {
  yield 0;
  yield 1;

  let prev1 = 0;
  let prev2 = 1;

  while (true) {
    const next = prev1 + prev2;
    yield next;

    prev1 = prev2;
    prev2 = next;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
