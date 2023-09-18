const Order = require('../lib/order');
const Product = require('../lib/product');

test('Create order and get the order total.', () => {
   const items = [
      new Product(1, 5, 2, 1.8, false),
      new Product(2, 5, 2, 1.8, false),
      new Product(3, 5, 2, 1.8, false),
   ];
   const order = new Order(new Date(), items, 22);
   expect(order.orderTotal).toBe(30);
});
