'use strict';
/**Created by BJ Rutledge
 * 2023-09-24
 */
/** getType checks to see if typeOf returns 'object' If not,
 *it will return the value of type of, which is lower case */

/**
 * Project and native types. This is meant to be used soley with
 * getType.
 */
const types = {
   //Custom types
   Product: 'Product',
   Order: 'Order',
   Employee: 'Employee',
   Customer: 'Customer',
   //mongoose types
   Schema: 'Schema',
   // Primitive types
   Boolean: 'Boolean',
   Number: 'Number',
   BigInt: 'BigInt',
   String: 'String',
   Symbol: 'Symbol',

   //Non primitive
   Array: 'Array',
   Object: 'Object',
   Date: 'Date'
};

module.exports = types;
