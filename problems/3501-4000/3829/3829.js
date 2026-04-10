class RideSharingSystem {
  constructor() {
    this.queue = [];
    this.qHead = 0;
    this.riders = new Set();
    this.drivers = [];
    this.dHead = 0;
  }

  addRider(id) {
    this.queue.push(id);
    this.riders.add(id);
  }

  addDriver(id) {
    this.drivers.push(id);
  }

  cancelRider(id) {
    this.riders.delete(id);
  }

  matchDriverWithRider() {
    while (this.qHead < this.queue.length && !this.riders.has(this.queue[this.qHead])) {
      this.qHead++;
    }

    if (this.qHead === this.queue.length || this.dHead === this.drivers.length) {
      return [-1, -1];
    }

    const rider = this.queue[this.qHead++];
    this.riders.delete(rider);

    return [this.drivers[this.dHead++], rider];
  }
}
