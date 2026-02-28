class MyHashMap {
  data = {};

  put(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key] ?? -1;
  }

  remove(key) {
    delete this.data[key];
  }
}
