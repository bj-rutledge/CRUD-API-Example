'use strict';
/**Created by BJ Rutledge
 * 2023-09-24
 * Employee Class
 */
//todo emplement error handler 
const getType = require('../../helpers/getType');

class Employee {
   /**
    * Employee class that represents an employee.
    * @param {Number} employeeId Employee ID
    * @param {String} firstName first name
    * @param {String} lastName Last name
    * @param {String} middleInitial Middle initial
    * @param {Date} hireDate Date Hired
    */
   constructor(employeeId, firstName, lastName, middleInitial, hireDate) {
      this.employeeId = employeeId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.middleInitial = middleInitial;
      this.hireDate = hireDate;
      this.terminationDate = null;
      this.terminated = false;
   }

   /**
    * Sets termination date and sets terminated property to true.
    * @param {Date} date Date of termination
    */
   terminateEmployee(date) {
      if (getType(date) != 'Date') {
         console.error('Must provide a date!');
      }
      this.terminated = true;
      this.terminationDate = date;
   }
}

module.exports = Employee;
