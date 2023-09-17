'use strict'; 
/*Created by BJ Rutledge 
 * 2023-09-17
 */


class Product{
   MIN_MARKUP = 1.5; 
   /**
    * Simple product class. 
    * @param {number} number Customer number
    * @param {number} cost Cost of item 
    * @param {number} markup Markup as percentage. If markup is below 1.5, the markup will be set to the default of 1.5
    * @param {number} list List price of product
    * @param {boolean} sellAtList Sets price to list if sell at list is true. 
    */
   constructor(number, cost, markup, list, sellAtList){
      if((typeof number == 'number' && typeof cost == 'number' && typeof markup == 'number' && typeof sellAtList == 'boolean')){
         this.number = number; 
         this.cost = cost; 
         this.markup = markup >= this.MIN_MARKUP? markup: this.MIN_MARKUP; 
         this.list = list; 
         this.sellAtList = sellAtList;    
      } else {
         console.error('Invalid arguments.', number, cost, markup,list, sellAtList);
      }
   }
   /** Customer price of product. If sellAtList is set to true, price will be list, otherwise, 
    * it will be calculated cost * markup. 
    */
   get price(){
      return this.sellAtList? this.list: this.cost * this.markup; 
   }
}


module.exports = Product; 