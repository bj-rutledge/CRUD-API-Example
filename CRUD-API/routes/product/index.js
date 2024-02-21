/**
 * Created by BJ Rutledge
 * Date:2024-02-21
 * Product router. 
 **/

const productRouter = require('express').Router(); 
const Product = require('../../lib/DataTypes/product');
const createProduct = require('../../lib/DAL/operations/product/createProduct');
const { ProductModel } = require('../../lib/DAL/db');
const { productNumber } = require('../../lib/DAL/schemas/lib/product');
productRouter.get('/get-product', (req, res, next) => {
   res.send('hello from product!');
});

productRouter.put('/update-product', (req, res, next) => {
   res.send('hello from product!');
});

productRouter.post('/create-product', (req, res, next) =>{
   const query = req.query; 

   const product = {
      productNumber: Number(query.number), 
      cost: Number(query.cost), 
      markup: Number(query.markup), 
      listPrice: Number(query.listPrice), 
      sellAtList: query.sellAtList == 'false'? false:true, 
      productName: query.productName, 
      productDescription: query.productDescription
   }

   createProduct(product).then(queryResult => {
      //todo implement logging 
      if(queryResult instanceof ProductModel){
         res.send('Success!');
      }
      else{
         res.status(404).send('Server error. Unable to create record.'); 
      }
   })
});

productRouter.delete('delete-product', (req, res, next) =>{
   res.send('hello from product!');
});

module.exports = productRouter; 