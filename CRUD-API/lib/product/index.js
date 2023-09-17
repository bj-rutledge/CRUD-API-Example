'use strict'; 
/*Created by BJ Rutledge 
 * 2023-09-17
 */


class Product{
   MIN_MARKUP = 1.5; 
   constructor(number, cost, markup, list, sellAtList){
      if((typeof number == 'number' && typeof cost == 'number' && typeof markup == 'number' && typeof sellAtList == 'boolean')){
         this.number = number; 
         this.cost = cost; 
         this.markup = markup >= this.MIN_MARKUP? markup: this.MIN_MARKUP; 
         this.list = list; 
         this.sellAtList = sellAtList;    
      }
   }

   get price(){
      return this.sellAtList? this.list: this.cost * this.markup; 
   }
}


module.exports = Product; 