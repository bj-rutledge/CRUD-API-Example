'use strict'; 
/**
 * Created by BJ Rutledge 
 * 2023-09-19
 */

const getType = (obj) => {

   if(obj === undefined || obj === null){
      return obj;
   }
   /**the constructor.name property holds the class name of all 
    * classes/objects. Therefore, We'll use this to get the 
    * type of the object. If it's  just a simple object, the 
    * return value will be Object. 
    */
   return obj.constructor.name;
}

module.exports = getType; 


