/**
 * Created by BJ Rutledge
 * Date: 11/04/2024
 * Update customer record. 
 **/

const { CustomerModel } = require("../../../db");

const updateCustomer = (query) => {
    //We're setting the new option to true so that it will return the document 
    //after the update is completed. 
    const result = CustomerModel.findOneAndUpdate(query.filter, query.update, {new: true});
    return result; 
}

module.exports = updateCustomer; 