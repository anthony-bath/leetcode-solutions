class MyHashSet {
  data = {};

  add(key) {
    this.data[key] = 1;
  }

  remove(key) {
    delete this.data[key];
  }

  contains(key) {
    return key in this.data;
  }
}
