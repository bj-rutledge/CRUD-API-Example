'use strict';

/**Created by BJ Rutlege
 * 2023-10-05
 */

//todo emplement error handling

const { ProductModel, OrderModel } = require('../../lib/DAL/db');
const types = require('../../lib/DataTypes');
describe('MongoDb', () => {
   it('Test insert order and product.', async () => {
      const numProducts = 100;
      const markup = 2.5;
      const name = 'Widget-';
      const description = 'My widget ';
      const products = [];
      const insertProducts = [];

      /**Build an array of products for the order. We will also add those same products to the
       * product database, which the schema is a little different, so we'll build an
       * insert products array as well.
       * I'm ocilating the sell at list bool to add a little variety in the products.
       */
      for (
         let i = 0,
            productNum = 7777,
            sellAtList = true,
            cost = 35,
            listPrice = 40;
         i < numProducts;
         i++, productNum++, sellAtList = !sellAtList, cost += 5, listPrice += 5
      ) {
         const _name = name + productNum;
         const _description = description + productNum;
         products.push(
            new types.Product(
               productNum,
               cost,
               markup,
               listPrice,
               sellAtList,
               _name,
               _description
            )
         );

         insertProducts.push({
            productNumber: products[i].number,
            cost: products[i].cost,
            listPrice: products[i].listPrice,
            sellAtList: products[i].sellAtList,
            productName: products[i].productName,
            productDescription: products[i].productDescription,
            price: products[i].price
         });
      }

      //create order with magic nums and product
      const orderNum = 302;
      const customerNum = 111222;
      const order = new types.Order(
         new Date(Date.now()),
         orderNum,
         products,
         customerNum
      );
      const itemNumbers = order.items.map((item) => item.number);

      await ProductModel.insertMany(insertProducts);
      await OrderModel.insertMany([
         {
            id: order.id,
            date: order.date,
            //We only store the product number in the db.
            items: itemNumbers
         }
      ]);

      const orderRes = await OrderModel.find({ id: order.id }).exec();
      // console.log(typeof orderRes, typeof orderRes[0]);
      for (let i = 0; i < orderRes[0].items.length; i++) {
         expect(orderRes[0].items[i]).toBe(products[i].number);
      }

      /**Iterate through the list of products,
       * query the db and verify that they are in
       * stored.
       */

      for (let i = 0; i < products.length; i++) {
         const productRes = await ProductModel.find({
            productNumber: products[i].number
         }).exec();
         expect(productRes[0].productName).toBe(products[i].productName);
      }

      await ProductModel.db.close();
      await OrderModel.db.close();
   });
});

// await OrderModel.db.close(true);
// await ProductModel.db.close(true);
