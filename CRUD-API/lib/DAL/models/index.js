'use strict';
/** Created by BJ Rutledge
 * 8/20/2023
 **/

const mongoose = require('mongoose');
const Order = require('../../order');
const Employee = require('../../employee');

/*Customer schema. */
const customerSchema = new mongoose.Schema({
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
   taxable: {
      type: Boolean,
      required: [true, 'taxable is a required field.'],
   },
   orders: [Number],
});

/*Employee schema
 *
 */
const employeeSchema = new mongoose.Schema({
   number: {
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
   terminationDate: Date,
});

/**
 *
 */
const Customer = mongoose.model('Customer', customerSchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = { Customer, Employee };
