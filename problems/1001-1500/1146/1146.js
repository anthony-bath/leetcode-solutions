class SnapshotArray {
  constructor() {
    this.snapshots = [];
    this.data = {};
    this.changed = false;
  }

  set(index, val) {
    this.data[index] = val;
    this.changed = true;
  }

  get(index, snap_id) {
    return this.snapshots[snap_id][index] ?? 0;
  }

  snap() {
    if (this.changed) {
      this.snapshots.push({ ...this.data });
    } else {
      this.snapshots.push(this.snapshots.at(-1) ?? {});
    }

    this.changed = false;

    return this.snapshots.length - 1;
  }
}
