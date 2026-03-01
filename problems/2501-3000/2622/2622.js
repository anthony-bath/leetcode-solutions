class TimeLimitedCache {
  constructor() {
    this.data = new Map();
    this.clearables = new Map();
  }

  set(key, value, duration) {
    const exists = this.data.has(key);

    if (exists) {
      clearTimeout(this.clearables.get(key));
    }

    this.data.set(key, value);
    this.clearables.set(key, setTimeout((() => this.data.delete(key)).bind(this), duration));

    return exists;
  }

  get(key) {
    return this.data.get(key) ?? -1;
  }

  count() {
    return this.data.size;
  }
}
