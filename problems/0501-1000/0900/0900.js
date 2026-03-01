class RLEIterator {
  constructor(encoding) {
    const counts = [];
    const nums = [];

    for (let i = encoding.length - 2; i >= 0; i -= 2) {
      if (encoding[i] === 0) continue;

      counts.push(encoding[i]);
      nums.push(encoding[i + 1]);
    }

    this.counts = counts;
    this.nums = nums;
  }

  next(n) {
    let remaining = n;

    while (this.nums.length > 0) {
      const available = this.counts.at(-1);

      if (remaining > available) {
        this.counts.pop();
        this.nums.pop();

        remaining -= available;
      } else if (remaining === available) {
        this.counts.pop();
        return this.nums.pop();
      } else {
        this.counts[this.counts.length - 1] -= remaining;
        return this.nums.at(-1);
      }
    }

    return -1;
  }
}
