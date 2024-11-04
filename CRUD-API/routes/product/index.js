/**
 * Created by BJ Rutledge
 * Date:2024-02-21
 * Product router.
 **/

//todo implement logging

const productRouter = require('express').Router();
const Product = require('../../lib/DataTypes/product');
const createProduct = require('../../lib/DAL/operations/product/createProduct');
const { ProductModel } = require('../../lib/DAL/db');

productRouter.get('/get-product', (req, res, next) => {
   res.send('hello from product!');
});

productRouter.put('/update-product', (req, res, next) => {
   res.send('hello from product!');
});

productRouter.post('/create-product', (req, res, next) => {
   const query = req.query;
   let product;
   try {
      product = new Product(
         Number(query.productNumber),
         Number(query.cost),
         Number(query.markup),
         Number(query.listPrice),
         query.sellAtList == 'false' || query.sellAtList == undefined
            ? false
            : true,
         query.productName,
         query.productName,
         query.productDescription
      );
      console.debug(
         'create-poduct: product received. name: ${product.productName} price: ${product.price}'
      );
   } catch (error) {
      console.debug('Invalid query sent. Unable to create product instance.');
      res.status(400).send(
         'Unable to create instance of Product. Invalid product.'
      );
   }

   console.log('create-product');
   try {
      createProduct(product).then((queryResult) => {
         if (queryResult instanceof ProductModel) {
            res.send('Success!');
         } else {
            res.status(500).send('Server error. Unable to create record.');
         }
      });
   } catch (error) {
      res.status(500).send('Server error. Unable to create record.', error);
   }
});

productRouter.post('/create-product', (req, res, next) => {
   const query = req.query;

   const product = {
      productNumber: Number(query.number),
      cost: Number(query.cost),
      markup: Number(query.markup),
      listPrice: Number(query.listPrice),
      sellAtList: query.sellAtList == 'false' ? false : true,
      productName: query.productName,
      productDescription: query.productDescription
   };

   createProduct(product).then((queryResult) => {
      //todo implement logging
      if (queryResult instanceof ProductModel) {
         res.send('Success!');
      } else {
         res.status(404).send('Server error. Unable to create record.');
      }
   });
});

productRouter.delete('delete-product', (req, res, next) => {
   res.send('hello from product!');
});

module.exports = productRouter;
