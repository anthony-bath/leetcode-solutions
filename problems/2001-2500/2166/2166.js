class Bitset {
  constructor(size) {
    this.size = size;
    this.data = Array(size).fill(0);
    this.ones = 0;
    this.inverted = false;
  }

  fix(idx) {
    const actual = this.inverted ? 1 - this.data[idx] : this.data[idx];
    if (actual === 1) return;

    this.data[idx] = this.inverted ? 0 : 1;
    this.ones += 1;
  }

  unfix(idx) {
    const actual = this.inverted ? 1 - this.data[idx] : this.data[idx];
    if (actual === 0) return;

    this.data[idx] = this.inverted ? 1 : 0;
    this.ones -= 1;
  }

  flip() {
    this.inverted = !this.inverted;
    this.ones = this.size - this.ones;
  }

  all() {
    return this.ones === this.size;
  }

  one() {
    return this.ones >= 1;
  }

  count() {
    return this.ones;
  }

  toString() {
    if (!this.inverted) {
      return this.data.join('');
    }

    return this.data.map((b) => (b === 0 ? 1 : 0)).join('');
  }
}
