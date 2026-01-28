class Cashier {
  constructor(n, discount, products, prices) {
    this.n = n;
    this.discount = 1 - discount / 100;
    this.customers = 0;
    this.priceByProduct = new Map();

    for (let i = 0; i < products.length; i++) {
      this.priceByProduct.set(products[i], prices[i]);
    }
  }

  getBill(product, amount) {
    this.customers++;

    let subtotal = 0;

    for (let i = 0; i < product.length; i++) {
      subtotal += amount[i] * this.priceByProduct.get(product[i]);
    }

    if (this.customers % this.n === 0) {
      return subtotal * this.discount;
    }

    return subtotal;
  }
}
