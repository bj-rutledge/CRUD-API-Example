'use strict';
//todo 2023-09-18 Need to add a check in the classes for 0 <= values for cost and list < cost checks.
/**Created By BJ Rutledge
 * 2023-09-18
 * Unit tests of Product and Order classes. More comprehensive testing
 * and development.
 *
 * * Note that these tests also do a sumary test of getType, as the
 * * classes call on getType for argument validation. So, we know that getType
 * * works in this context. We will test it on its own without instantiating
 * * the order and product classes.
 */
const Order = require('../../lib/DataTypes/order');
const Product = require('../../lib/DataTypes/product');
describe('Sanity Check Order/Total', () => {
   it('Should sanity check. create order and get the order total.', () => {
      const items = [
         /**Magic number here are used for a quick sanity check on
          * the orderTotal getter of Order.
          * A more thorough test has been been written; however,
          * need to add a little better error checking in classes.
          * See above todo. 2023-09-18
          */
         new Product(1, 5, 2, 1.8, false, 'product1', 'product1'),
         new Product(2, 5, 2, 1.8, false, 'product2', 'product2'),
         new Product(3, 5, 2, 1.8, false, 'product3', 'product3'),
      ];
      const order = new Order(new Date(), 12, items, 34);
      expect(order.orderTotal).toBe(30);
   });

   it('Should create order and get the order total.', () => {
      /**Markup is set to 2.5. Should sell for 55.00 */
      let productNum = 0;
      let productCost = 22;
      let productMarup = 2.5;
      let listPrice = 28.0;
      let sellAtList = false;
      let productName = 'First Product';
      let productDescription = 'Description of first product';
      const product1ExpectedPrice = 55;
      const product1 = new Product(
         productNum,
         productCost,
         productMarup,
         listPrice,
         sellAtList,
         productName,
         productDescription,
      );

      /**Because this product markup is below the min markup, it should default to 1.5
       * and sell for 25 * 1.5 = 37.50
       */
      productNum = 1;
      productCost = 25;
      productMarup = 0.5;
      listPrice = 35.0;
      sellAtList = false;
      productName = 'Second Product';
      productDescription = 'Description of second product';
      const product2ExpectedPrice = 37.5;
      const product2 = new Product(
         productNum,
         productCost,
         productMarup,
         listPrice,
         sellAtList,
         productName,
         productDescription,
      );

      /**Sell at list true. Should sell for 29.00 */
      productNum = 1;
      productCost = 25;
      productMarup = 0;
      listPrice = 29.0;
      sellAtList = true;
      productName = 'Third Product';
      productDescription = 'Description of third product';
      const product3ExpectedPrice = 29;
      const product3 = new Product(
         productNum,
         productCost,
         productMarup,
         listPrice,
         sellAtList,
         productName,
         productDescription,
      );

      const date = new Date(Date.now());
      const orderId = 1234;
      const items = [product1, product2, product3];
      const customerNumber = 5678;
      const expectedOrderTotal =
         product1ExpectedPrice + product2ExpectedPrice + product3ExpectedPrice;

      const order = new Order(date, orderId, items, customerNumber);

      //run tests
      expect(product1.price).toBe(product1ExpectedPrice);
      expect(product2.price).toBe(product2ExpectedPrice);
      expect(product3.price).toBe(product3ExpectedPrice);
      expect(order.orderTotal).toBe(expectedOrderTotal);
   });
});
