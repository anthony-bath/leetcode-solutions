const { sqrt, random, cos, sin, PI } = Math;

class Solution {
  constructor(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  randPoint() {
    const radius = sqrt(random()) * this.radius;
    const angle = random() * 2 * PI;
    const px = this.x + radius * cos(angle);
    const py = this.y + radius * sin(angle);

    return [px, py];
  }
}
