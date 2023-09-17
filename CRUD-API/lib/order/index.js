'use strict';

const Product = require("../product");


class Order{
   constructor(date, items, customerNumber){
      if(Object.prototype.toString.call(date) === '[object Date]' 
         && Object.prototype.toString.call(items) === '[object Array]' 
         && typeof customerNumber === 'number'){
            this.date = date; 
            this.items = items; 
            this.customerNumber = customerNumber;       
      }
      else{
         console.error('invalid arguments', date, items, customerNumber);
      }
   }
   get orderTotal(){
      return this.items.reduce((total, item) => {
         if(item instanceof Product){
            return total + item.price
         }else{
            console.error('Invalid item in order:', item);
         }
      }, 0);
   }
}

module.exports = Order; 