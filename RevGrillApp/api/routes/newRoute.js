var express = require('express');
var router = express.Router();

/* GET newRout listing. */
router.get('/newRoute', function(req, res, next) {
    res.send("Hello World");
});

module.exports = router;