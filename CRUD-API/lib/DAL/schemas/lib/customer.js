'use strict';

/**Created by BJ Rutledge
 * 2023-09-25
 * license MIT
 */


/*Customer schema. */
const customerSchema = {
   number: {
      type: Number,
      required: [true, 'Must have a customer number.'],
   },
   first: {
      type: String,
      min: [2, 'Name must be at least 2 characters'],
      max: 20,
      required: [true, 'First name is required'],
   },
   middleInitial: {
      type: String,
      max: [1, 'Middle initial is only one character.'],
   },
   last: {
      type: String,
      min: [2, 'Name must be at least 2 characters'],
      max: 20,
      required: [true, 'First name is required'],
   },
   phone: {
      type: String,
      min: [10, 'phone must be at least 10 characters'],
      max: 15,
      required: [true, 'Phone name is required'],
   },
   email: {
      type: String,
      min: [5, 'email must be at least 5 characters'],
      
   },
   taxable: {
      type: Boolean,
      required: [true, 'taxable is a required field.'],
   },
   orders: [Number],
};

module.exports = customerSchema;
