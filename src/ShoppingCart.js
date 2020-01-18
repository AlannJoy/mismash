class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, pricePerUnit) {
    // create object
    const item = {
      name: itemName,
      quantity: quantity,
      pricePerUnit: pricePerUnit
    };
    this.items.push(item);
    //console.log(cart);
  }
  clear() {
    this.items = [];
  }

  total() {
    return this.items.reduce((acc, current) => {
      return acc + current.quantity * current.pricePerUnit;
    }, 0);
  }
}

module.exports = ShoppingCart;
