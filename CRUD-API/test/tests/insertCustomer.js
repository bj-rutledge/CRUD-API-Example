'use strict'; 
/**
 * Created by BJ Rutledge
 * Date:2023-12-03
 **/
const {CustomerModel} = require('../../lib/DAL/db');
const { middleInitial } = require('../../lib/DAL/schemas/lib/customer');
const Customer = require('../../lib/DataTypes/customer');

describe('Insert Customer', () => {
   it('Should insert a customer record into the db.', async () => {
      const customers = [
         new Customer(1, 'Bob', 'Jones', 'J', 'bob@bob.com', '555-555-5555', true, [222,45,232]),
         new Customer(2, 'Tom', 'Danman', '', 'tom@tom.com', '555-666-7777', false, [])
      ];
      customers.map(cus => {
         return {
            customerNumber: cus.customerNumber, 
            firstName: cus.firstName,
            middleInitial: cus.middleInitial,
            lastName: cus.lastName, 
            email: cus.email, 
            phone: cus.phone,
            taxable: cus.taxable, 
            orders: cus.orders
         }
      })
      await CustomerModel.insertMany(customers);
   
   });
});