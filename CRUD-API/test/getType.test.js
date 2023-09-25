/**Created by BJ Rutledg 
 * 2023-09-24
 */

const getType = require('../lib/helpers/getType');
const types = require('../lib/helpers/types');
const Order = require('../lib/order');
const Product = require('../lib/product');
const Employee = require('../lib/employee');
const Customer = require('../lib/customer');



test('Verify that get type and types are mapped properly', ()=>{

   const testTypes = {
      Order: new Order(),
      Product: new Product(),
      Employee: new Employee(),
      Customer: new Customer(), 
      Array: new Array(),
      number: new Number(), 
      string: new String(), 
      boolean: new Boolean(), 
      object: new Object(), 
   }

   /**Each key in the object testTypes should be
    * the return value of getType. 
    */
   for(key in testTypes){
      expect(getType(testTypes[key])).toBe(key); 
   }

});