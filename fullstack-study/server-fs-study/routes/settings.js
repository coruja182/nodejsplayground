const express = require('express')
const config = require('config')
const router = express.Router()

const dbConfig = config.dbConfig

router.get('/', function (req, res, next) {
  res.send(dbConfig)
});

module.exports = router
