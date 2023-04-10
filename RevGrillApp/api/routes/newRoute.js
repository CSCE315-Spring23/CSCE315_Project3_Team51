var express = require('express');
var router = express.Router();

/* GET newRout listing. */
router.get('/', function(req, res, next) {
    res.send('Hello from Express API new route');
});

module.exports = router;