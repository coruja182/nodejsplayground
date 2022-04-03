var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = [{
    id: 'user-id-1',
    name: 'user-name-1'
  }, {
    id: 'user-id-2',
    name: 'user-name-2'
  }, {
    id: 'churrina-id',
    name: 'Elisa Cantamessa'
  },
  ]

  res.send(users);
});

module.exports = router;
