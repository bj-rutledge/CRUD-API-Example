'use strict';

/**Created by BJ Rutledge
 * 2023-09-25
 * License MIT
 */
const { Schema, model } = require('mongoose');

/*Employee schema
 *
 */
const employeeSchema = {
   id: {
      type: Number,
      required: [true, 'Must have an employee number.'],
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
   hireDate: {
      type: Date,
      required: [true, 'Must have a hire date. '],
   },
   terminated: {
      type: Boolean,
      required: [true, 'Must have terminated boolean'],
   },
   terminationDate: Date,
};

module.exports = employeeSchema;
