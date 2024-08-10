'use strict';

/**Created by BJ Rutledge
 * 2023-10-06
 */
const getType = require('../../helpers/getType');
const types = require('../../helpers/types');
//todo emplement error handling

class Customer {
   /**
    * Customer class.
    * @paran {Number} customerNumber
    * @param {string} firstName First name
    * @param {string} lastName last name
    * @param {string} middleInitial middle initial (accepts null/undefined)
    * @param {string} email email address (accepts null/undefined)
    * @param {string} phone phone number.
    * @param {boolean} taxable False if customer is tax exempt
    * @param {[number]} orders array of order numbers. If no orders, pass null/undefined.
    */
   constructor(
      customerNumber,
      firstName,
      lastName,
      middleInitial,
      email,
      phone,
      taxable,
      orders,
   ) {
      if (
         !(
            getType(customerNumber) === types.Number &&
            getType(firstName) === types.String &&
            getType(lastName) === types.String &&
            (middleInitial === undefined ||
               getType(middleInitial) === types.String) &&
            (email === undefined || getType(email) === types.String) &&
            getType(phone) === types.String &&
            getType(taxable) === types.Boolean &&
            (orders === undefined || getType(orders) === types.Array)
         )
      ) {
         console.error('Error. Invalid arguments');
      }
      this.customerNumber = customerNumber;
      this.firstName = firstName;
      this.middleInitial = middleInitial || '';
      this.lastName = lastName;
      this.email = email || '';
      this.phone = phone;
      this.taxable = taxable;
      this.orders = orders || [];
   }
}

module.exports = Customer;
