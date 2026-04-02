class LUPrefix {
  constructor(n) {
    this.n = n;
    this.uploaded = Array(n + 1).fill(0);
    this.marker = 0;
  }

  upload(video) {
    this.uploaded[video] = 1;

    for (let i = this.marker + 1; i <= this.n; i++) {
      if (this.uploaded[i]) {
        this.marker += 1;
      } else {
        break;
      }
    }
  }

  longest() {
    return this.marker;
  }
}
