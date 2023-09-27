'use strict';

/**Created by BJ Rutledge
 * 2023-09-25
 * License MIT
 */

const { Schema, model } = require('mongoose');
const Product = require('../../../product');

const schema = {
   id: {
      type: Number,
      required: [true, 'Must have an order number.'],
   },
   date: {
      type: Date,
      required: [true, 'Must have a date of order'],
   },
   items: {
      type: [Product],
      required: [true, 'Must include an array of products'],
      validate: [
         (arry) => arry.length > 0,
         'Must have at least one product in order.',
      ],
   },
};

const orderSchema = new Schema(schema);

const orderModel = model('Order', orderSchema);

module.exports = orderModel;
