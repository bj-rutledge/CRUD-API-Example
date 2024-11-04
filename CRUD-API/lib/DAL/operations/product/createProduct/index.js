/**
 * Created by BJ Rutledge
 * Date:2024-02-21
 * Create a new product in the database.
 **/

const { ProductModel } = require('../../../db');

const createProduct = (product) => {
   return ProductModel.create(product);
};

module.exports = createProduct;
