'use strict';

/**Created by BJ Rutledge
 * 2023-09-25
 * License MIT
 */

const productSchema = {
   productNumber: {
      type: Number,
      required: [true, 'Must have a product number.'],
   },
   cost: {
      type: Number,
      required: [true, 'Must have a cost'],
   },
   markup: Number,
   listPrice: {
      type: Number,
      required: [true, 'Must have list price'],
   },
   sellAtList: {
      type: Boolean,
      required: [true, 'Must have sell at list'],
   },
   productName: {
      type: String,
      required: [true, 'Must have product name'],
   },
   productDescription: {
      type: String,
      required: [true, 'Must have product description'],
   },
   price: Number,
};

module.exports = productSchema;
