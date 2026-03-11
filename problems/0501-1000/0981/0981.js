class TimeMap {
  constructor() {
    this.data = new Map();
  }

  set(key, value, timestamp) {
    if (!this.data.has(key)) {
      this.data.set(key, []);
    }

    this.data.get(key).push({ value, timestamp });
  }

  get(key, timestamp) {
    if (!this.data.has(key)) return '';

    const entries = this.data.get(key);

    let [lo, hi] = [0, entries.length - 1];
    let result = '';

    while (lo <= hi) {
      const mid = (lo + hi) >> 1;

      if (entries[mid].timestamp <= timestamp) {
        result = entries[mid].value;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    return result;
  }
}
