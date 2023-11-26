var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
   res.render('index', { title: 'Express' });
});

router.get('/get-customer', (req, res, next) => {
   console.debug(req);
   res.send('Hello from CRUD API');
});

module.exports = router;
