'use strict';
/**
 * Created by BJ Rutledge
 * Date:2023-10-06
 * get-customer 2023-11-30 moved to customer router 2/21/24 
 * This will be the router for handling non crud related things. 
 **/
//todo implement logging
//todo implement error handling

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
   res.render('index', { title: 'Express' });
});

module.exports = router;