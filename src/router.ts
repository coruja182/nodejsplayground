import { Router } from 'express'
import { locationController } from './controller'
const router = Router()

router.use('/location', locationController)

export default router