class MapSum {
  constructor() {
    this.data = new Map();
    this.actual = new Map();
  }

  insert(key, val) {
    const existing = this.actual.get(key) ?? 0;
    this.actual.set(key, val);

    for (let i = 1; i <= key.length; i++) {
      const pre = key.substring(0, i);
      this.data.set(pre, (this.data.get(pre) ?? 0) + val - existing);
    }
  }

  sum(prefix) {
    return this.data.get(prefix) ?? 0;
  }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
