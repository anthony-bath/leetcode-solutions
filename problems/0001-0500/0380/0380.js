class RandomizedSet {
  constructor() {
    this.lookup = new Map();
    this.values = [];
  }

  insert(val) {
    if (this.lookup.has(val)) return false;

    this.values.push(val);
    this.lookup.set(val, this.values.length - 1);
    return true;
  }

  remove(val) {
    if (!this.lookup.has(val)) return false;

    const lastValue = this.values.at(-1);
    const thisIndex = this.lookup.get(val);

    this.lookup.set(lastValue, thisIndex);
    this.lookup.delete(val);
    this.values[thisIndex] = lastValue;
    this.values.pop();

    return true;
  }

  getRandom() {
    const index = Math.floor(Math.random() * this.values.length);
    return this.values[index];
  }
}
