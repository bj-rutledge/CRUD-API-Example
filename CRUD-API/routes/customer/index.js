/**
 * Created by BJ Rutledge
 * Date:2024-02-21
 **/

const customerRouter = require('express').Router(); 
const { readCustomer, updateCustomer } = require('../../lib/DAL/operations');

customerRouter.get('/get-customer', (req, res, next) => {
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

customerRouter.put('/update-customer', (req, res, next) => {
   //receiving a json body with filter and update params
   const query = req.body;
   //short circuit validation. 
   if(query.update == undefined || query.filter == undefined) {
      res.status(400).send(
         `Invalid query params. Must send filter and update. query.filter: ${query.filter} query.update: ${query.update}`
      );
   }
   updateCustomer(query).then((queryRes) => {
      if(!queryRes || queryRes.email == undefined || queryRes.email == ''){
         /**We're using 204 for proper api calls that do not retrieve a record. */
         res.status(204).send();
      } else {
         res.send(queryRes); 
      }
   }).catch((err) => {
      console.debug('Error updating customer', err); 
      res.status(500).send('Server Error. Route update-customer. Query call.');
   })
});

customerRouter.post('/create-customer', (req, res, next) =>{

});

customerRouter.delete('delete-customer', (req, res, next) =>{

});

module.exports = customerRouter; 