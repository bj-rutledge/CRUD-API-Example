'use strict';
/* Created by BJ Rutledge
 * 2023-09-17*/
//todo emplement error handler

const Product = require('../product');
const getType = require('../../helpers/getType');
const types = require('../../helpers/types');

class Order {
   /**
    * Customer order.
    * @param {Date} date Date of order
    * @param {Number} id Order number
    * @param {[Product]} items Array of Products.
    * @param {Number} customerNumber Customer Number
    */
   constructor(date, id, items, customerNumber) {
      if (
         getType(date) === types.Date &&
         getType(id) === types.Number &&
         getType(items) === types.Array &&
         getType(customerNumber) === types.Number
      ) {
         // todo need to clean this up and do some real error handling.
         for (let i = 0; i < items.length; i++) {
            if (getType(items[i]) != types.Product) {
               console.error('Invalid product in order');
            }
         }
         this.date = date;
         this.id = id;
         this.items = items;
         this.customerNumber = customerNumber;
      } else {
         console.error('invalid arguments', date, items, customerNumber);
      }
   }

   //todo need to flush this out. Error checking/handling, etc.
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
