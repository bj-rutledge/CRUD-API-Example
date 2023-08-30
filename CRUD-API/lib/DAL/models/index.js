"use strict";

const mongoose = require("mongoose");
const Order = require('../../order');
const Employee = require('../../employee');

/*Customer schema. */
const customerSchema = new mongoose.Schema({
   number: {
      type: Number,
      required: [true, "Must have a customer number."],
   },
   first: {
      type: String,
      min: [2, "Name must be at least 2 characters"],
      max: 20,
      required: [true, "First name is required"],
   },
   mi: {
      type: String,
      max: [1, "Middle initial is only one character."],
   },
   last: {
      type: String,
      min: [2, "Name must be at least 2 characters"],
      max: 20,
      required: [true, "First name is required"],
   },
   orders: [Order],
});

/*Employee schema
 * 
*/
const employeeSchema = new mongoose.Schema({
   number: {
      type: Number,
      required: [true, "Must have an employee number."],
   },
   first: {
      type: String,
      min: [2, "Name must be at least 2 characters"],
      max: 20,
      required: [true, "First name is required"],
   },
   mi: {
      type: String,
      max: [1, "Middle initial is only one character."],
   },
   last: {
      type: String,
      min: [2, "Name must be at least 2 characters"],
      max: 20,
      required: [true, "First name is required"],
   },
   hireDate: {
      type: Date,
      required: [true, "Must have a hire date. "],
   },
   terminationDate: Date,
});


/**
 * 
 */
const Customer = mongoose.model("Customer", customerSchema);
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = { Customer, Employee };
