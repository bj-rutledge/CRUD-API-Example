'use strict';
/** Created by BJ Rutledge
 * 8/20/2023
 **/
const customerSchema = require('./lib/customer.js');
const employeeSchema = require('./lib/employee.js');
const productSchema = require('./lib/product.js');
const orderSchema = require('./lib/order.js');


const schemas =  { customerSchema, employeeSchema, productSchema, orderSchema};
module.exports = schemas; 

