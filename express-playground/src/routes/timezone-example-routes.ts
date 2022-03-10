import express from 'express'
import { dateFnsTimezoneController, luxonTimezoneController } from '../controllers'

const router = express.Router()
router.get('/date-fns', dateFnsTimezoneController.get)
router.post('/date-fns', dateFnsTimezoneController.post)
router.get('/luxon', luxonTimezoneController.get)
router.post('/luxon', luxonTimezoneController.post)

export default router
