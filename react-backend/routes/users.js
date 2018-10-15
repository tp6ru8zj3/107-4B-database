var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        id: 1,
        username: "陳家輔"
    }, {
        id: 2,
        username: "邱穎雋\n 黃耀德"
    }]);
});

module.exports = router;