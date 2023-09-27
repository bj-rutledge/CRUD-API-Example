'use strict';
/** Created by BJ Rutledge
 * 8/20/2023
 **/
const Customer = require('./lib/customer.js');
const Employee = require('./lib/employee.js');
const Product = require('./lib/product.js');
const Order = require('./order.js');

const models = { Customer, Employee, Product, Order };
module.exports = models;
