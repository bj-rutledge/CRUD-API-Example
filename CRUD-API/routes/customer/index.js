/**
 * Created by BJ Rutledge
 * Date:2024-02-21
 **/

const customerRouter = require('express').Router();
const { readCustomer } = require('../../lib/DAL/operations');

customerRouter.get('/get-customer', (req, res, next) => {
   const query = req.query;

   console.debug('Query received:', query);
   if (
      query.email == undefined &&
      query.phoneNumber == undefined &&
      query.customerNumber == undefined
   ) {
      res.status(400).send(
         'Query Error. Invalid query. Must query with email, phone, or customer number.',
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
               'Server Error. Route get customer. Query call.',
            );
         });
   }
});

customerRouter.put('/update-customer', (req, res, next) => {});

customerRouter.post('/create-customer', (req, res, next) => {});

customerRouter.delete('delete-customer', (req, res, next) => {});

module.exports = customerRouter;
