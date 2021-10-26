import express from 'express'
import { locationController } from '../controllers'

const router = express.Router()
router.get('/timezones', locationController.timezones_get)

export default router
