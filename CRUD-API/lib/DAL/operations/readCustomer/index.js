'use strict';
/**
 * Created by BJ Rutledge
 * Date:2023-11-26
 **/

const {CustomerModel} = require('../../db'); 
//todo implement error handling 
//todo need to add logic that checks query before sending. Only want to query customer number, email, and maybe order number  
const readCustomer = (query) => {
   console.debug('Attempting to retrieve custoemr record.');
   const customer = CustomerModel.findOne(query);
   return customer; 
}

module.exports = readCustomer; 