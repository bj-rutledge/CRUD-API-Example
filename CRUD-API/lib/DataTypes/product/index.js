'use strict';
/*Created by BJ Rutledge
 * 2023-09-17
 */

const getType = require('../../helpers/getType');
const types = require('../../helpers/types');
const roundTwoDecimal = require('../../helpers/roundTwoDecimal');

class Product {
   /**Default minimum markup. */
   MIN_MARKUP = 1.5;
   /**
    * Simple product class.
    * @param {number} productNumber Customer number
    * @param {number} cost Cost of item
    * @param {number} markup Markup as percentage. If markup is below 1.5, the markup will be set to the default of 1.5
    * @param {number} listPrice List price of product
    * @param {boolean} sellAtList Sets price to list if sell at list is true.
    * @param {string} productName Name of product
    * @param {string} productDescription Description of product.
    */
   constructor(
      productNumber,
      cost,
      markup,
      listPrice,
      sellAtList,
      productName,
      productDescription
   ) {
      if (
         getType(productNumber) == types.Number &&
         getType(cost) == types.Number &&
         getType(markup) == types.Number &&
         getType(listPrice) == types.Number &&
         getType(sellAtList) == types.Boolean &&
         getType(productName) == types.String &&
         getType(productDescription) == types.String
      ) {
         this.productNumber = productNumber;
         this.cost = cost;
         this.markup = markup >= this.MIN_MARKUP ? markup : this.MIN_MARKUP;
         this.listPrice = listPrice;
         this.sellAtList = sellAtList;
         this.productName = productName;
         this.productDescription = productDescription;

         // Calculate the price directly
         const calculatedPrice = this.sellAtList
            ? this.listPrice
            : this.cost * this.markup;

         // Check if price is greater than cost
         if (calculatedPrice <= this.cost) {
            console.error('Price must be greater than cost.');
            return; // Stop further execution
         }
      } else {
         console.error(
            'Invalid arguments.',
            productNumber,
            cost,
            markup,
            listPrice,
            sellAtList,
            productName,
            productDescription
         );
      }
   }
   /** Customer price of product. If sellAtList is set to true, price will be list, otherwise,
    * it will be calculated cost * markup.
    */
   get price() {
      /**Round to the 100th decimal. n.n55 === n.n6 */

      const price = this.sellAtList
         ? this.listPrice
         : roundTwoDecimal(this.cost * this.markup);
      return price;
   }
}

module.exports = Product;
