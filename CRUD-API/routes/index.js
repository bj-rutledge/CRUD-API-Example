var express = require('express');
var router = express.Router();
const readCustomer = require('../lib/DAL/operations/readCustomer'); 

/* GET home page. */
router.get('/', function (req, res, next) {
   res.render('index', { title: 'Express' });
});

router.get('/get-customer', (req, res, next) => {
   // console.debug(req);
   const query = req.query; 
   console.debug('Query received:', query);
   const queryResult = readCustomer(query);
   queryResult.then(queryRes => res.send(queryRes));
});

module.exports = router;
