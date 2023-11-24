'use strict';

/**Created by BJ Rutledge
 * 2023-09-25
 * License MIT
 */

const orderSchema = {
   id: {
      type: Number,
      required: [true, 'Must have an order number.'],
   },
   date: {
      type: Date,
      required: [true, 'Must have a date of order'],
   },
   items: {
      type: [Number], //Product number array
      required: [true, 'Must include an array of products'],
      validate: [
         (arry) => arry.length > 0,
         'Must have at least one product in order.',
      ],
   },
};

module.exports = orderSchema;
