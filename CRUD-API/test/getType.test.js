/**Created by BJ Rutledg 
 * 2023-09-24
 */

//Order and product have been tested in order.test.js
// const Order = require('../lib/order');
// const Product = require('../lib/product');
const getType = require('../lib/helpers/getType');
const types = require('../lib/helpers/types');
const Employee = require('../lib/employee');
const Customer = require('../lib/customer');

const employeeId = 0; 
const firstName = 'foo';
const lastName = 'bar'; 
const middleInitial = 'b'; 
const dateHired = new Date(); 

const testTypes = {
   Employee: new Employee(employeeId, firstName, lastName, middleInitial, dateHired),
   Customer: new Customer(), 
   Array: new Array(),
   Number: 0, 
   String: 'String', 
   Boolean: true, 
   Object: new Object(),
   Date: new Date(),
   // Symbol: new Symbol(),
   // BigInt: new BigInt(), 
}


test('Verify that get type and types are mapped properly', ()=> {

   console.log('testTypes:', testTypes);


   /**Each key in the object testTypes should be
    * mapped to the key of types.
    */

   for(const key in testTypes){
      console.debug('Testing', key)
      expect(getType(testTypes[key])).toBe(types[key]); 
   }

});