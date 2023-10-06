'use strict'; 

/**Created by BJ Rutlege 
 * 2023-10-05
 */
require('dotenv').config({path: '../env/.env'});

const  { CustomerModel, EmployeeModel, ProductModel, OrderModel, mongoose} = require('../lib/DAL/db');
const Types = require('../lib/DataTypes');

const product = new Types.Product(3, 233, 23.6, 231, false, 'Widget3', 'My Widget3');

ProductModel.insertMany([{
   productNumber: product.number,
   cost: product.cost, 
   listPrice: product.listPrice, 
   sellAtList: product.sellAtList, 
   productName: product.productName,
   productDescription: product.productDescription, 
   price: product.price
}]);



const res = ProductModel.find({})
.then(res => {
   console.debug(res);
   ProductModel.db.close(); 
})
.catch(err =>{
   console.debug(err); 
   ProductModel.db.close(); 
});
console.log(res);


// mongoose.connection.close();  
