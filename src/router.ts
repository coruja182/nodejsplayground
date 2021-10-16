import { Router } from 'express'
import { locationController } from './controller'
const router = Router()

router.use('/timezones', locationController)

export default router