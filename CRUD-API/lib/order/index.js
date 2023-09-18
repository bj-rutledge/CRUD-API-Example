'use strict';
/* Created by BJ Rutledge
 * 2023-09-17*/

const Product = require('../product');

class Order {
   /**
    * Customer order.
    * @param {Date} date Date of order
    * @param {Number} orderNumber Order number
    * @param {[Product]} items Array of Products
    * @param {Number} customerNumber Customer Number
    */
   constructor(date, orderNumber, items, customerNumber) {
      if (
         Object.prototype.toString.call(date) === '[object Date]' &&
         typeof orderNumber === 'number' &&
         Object.prototype.toString.call(items) === '[object Array]' &&
         typeof customerNumber === 'number'
      ) {
         this.date = date;
         this.orderNumber = orderNumber;
         this.items = items;
         this.customerNumber = customerNumber;
      } else {
         console.error('invalid arguments', date, items, customerNumber);
      }
   }

   /**
    * Order total sums the total price of the product array by accessing the product.price property.
    */
   get orderTotal() {
      return this.items.reduce((total, item) => {
         if (item instanceof Product) {
            return total + item.price;
         } else {
            console.error('Invalid item in order:', item);
         }
      }, 0);
   }
}

module.exports = Order;
