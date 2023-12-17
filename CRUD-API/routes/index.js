'use strict';
/**
 * Created by BJ Rutledge
 * Date:2023-10-06
 * get-customer 2023-11-30
 **/
//todo implement logging
//todo implement error handling

var express = require('express');
var router = express.Router();
const { readCustomer } = require('../lib/DAL/operations');

router.get('/get-customer', (req, res, next) => {
   const query = req.query;

   console.debug('Query received:', query);
   if (
      query.email == undefined &&
      query.phoneNumber == undefined &&
      query.customerNumber == undefined
   ) {
      res.status(400).send(
         'Query Error. Invalid query. Must query with email, phone, or customer number.'
      );
   } else {
      readCustomer(query)
         .then((queryRes) => {
            if (
               !queryRes ||
               queryRes.email == undefined ||
               queryRes.email == ''
            ) {
               /**We're using 204 for proper api calls that do not retrieve a record. */
               res.status(204).send();
            } else {
               res.send(queryRes);
            }
         })
         .catch((err) => {
            console.debug('Error reading customer', err);
            res.status(500).send(
               'Server Error. Route get customer. Query call.'
            );
         });
   }
});

module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
   res.render('index', { title: 'Express' });
});
