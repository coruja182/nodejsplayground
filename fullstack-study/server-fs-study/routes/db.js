const express = require('express')
const db = require('../db-connection')

const router = express.Router()

router.get('/', async (req, res, next) => {
  const knex = await db.getKnex()
  res.send({
    result: await knex.fromRaw('(SELECT 1 FROM dual) dummy')
  })
})

module.exports = router
