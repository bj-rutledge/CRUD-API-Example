'use strict';
/*Created by BJ Rutledge
 * 2023-09-17
 */

const getType = require('../helpers/getType');
const types = require('../helpers/types');

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
      switch (true) {
         case (
            getType(productNumber) == types.Number &&
            getType(cost) == types.Number &&
            getType(markup) == types.Number &&
            getType(sellAtList) == types.Boolean &&
            getType(productName) == types.String &&
            getType(productDescription) == types.String
         ):
            this.number = productNumber;
            this.cost = cost;
            this.markup = markup >= this.MIN_MARKUP ? markup : this.MIN_MARKUP;
            this.listPrice = listPrice;
            this.sellAtList = sellAtList;
            this.productName = productName;
            this.productDescription = productDescription;

            // Added a flag for override
            this.overrideCheck = false;

            // Check if price is greater than cost
            if (!this.overrideCheck && this.price <= this.cost) {
               console.error(
                  'Price must be greater than cost. Use override to bypass.'
               );
            }
            break;

         default:
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
            break;
      }
   }

   /** Customer price of product. If sellAtList is set to true, price will be list, otherwise,
    * it will be calculated cost * markup.
    */
   get price() {
      return this.sellAtList ? this.listPrice : this.cost * this.markup;
   }

   // Method to override the price check
   overridePriceCheck() {
      this.overrideCheck = true;
   }
}

module.exports = Product;

