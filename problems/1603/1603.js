/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
  constructor(big, medium, small) {
    this.cars = [big, medium, small];
  }

  addCar(carType) {
    if (this.cars[carType - 1] > 0) {
      this.cars[carType - 1]--;
      return true;
    }

    return false;
  }
}
