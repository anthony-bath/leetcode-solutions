class NeighborSum {
  grid;
  size;
  coordMap;

  constructor(grid) {
    this.grid = grid;
    this.size = grid.length;
    this.coordMap = new Map();

    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        this.coordMap.set(grid[row][col], [row, col]);
      }
    }
  }

  adjacentSum(value) {
    const [row, col] = this.coordMap.get(value);
    const directions = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ];

    let sum = 0;

    for (const [dr, dc] of directions) {
      const nr = row + dr;
      const nc = col + dc;

      if (nr >= 0 && nr < this.size && nc >= 0 && nc < this.size) {
        sum += this.grid[nr][nc];
      }
    }

    return sum;
  }

  diagonalSum(value) {
    const [row, col] = this.coordMap.get(value);
    const directions = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];
    let sum = 0;

    for (const [dr, dc] of directions) {
      const nr = row + dr;
      const nc = col + dc;

      if (nr >= 0 && nr < this.size && nc >= 0 && nc < this.size) {
        sum += this.grid[nr][nc];
      }
    }

    return sum;
  }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
