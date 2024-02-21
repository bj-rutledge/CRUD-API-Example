//todo implement error handling and logging
'use strict';
/**
 * Created by BJ Rutledge
 * Date:2023-11-26
 **/

const { CustomerModel } = require('../../../db');
const readCustomer = (query) => {
   console.debug('Attempting to retrieve custoemr record.');
   const customer = CustomerModel.findOne(query);
   // CustomerModel.db.close();

   return customer;
};

module.exports = readCustomer;
