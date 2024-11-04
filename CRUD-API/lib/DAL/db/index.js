'use strict';
/** Created by BJ Rutledge
 * 8/20/2023
 * Refactored
 * 2023-10-07
 **/

const mongoose = require('mongoose');
const schemas = require('../schemas');

const uri = process.env.DB_URI;

mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
const CustomerModel = mongoose.model(
   'Customer',
   new mongoose.Schema(schemas.customerSchema)
);
const EmployeeModel = mongoose.model(
   'Employee',
   new mongoose.Schema(schemas.employeeSchema)
);
const OrderModel = mongoose.model(
   'Order',
   new mongoose.Schema(schemas.orderSchema)
);
const ProductModel = mongoose.model(
   'Product',
   new mongoose.Schema(schemas.productSchema)
);

// const Connection = mongoose.connection;
const Models = { CustomerModel, EmployeeModel, OrderModel, ProductModel };
/**
 * DB modles. When ready to close the connection, need to call *Model.db.close()
 */
module.exports = Models;
