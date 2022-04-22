var express = require('express')
var userController = require('../user/user-controller')
var router = express.Router()

/* GET users listing. */
router.get('/', userController.getFindAllUsers)

module.exports = router
