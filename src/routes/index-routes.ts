import { Router } from 'express'
import locationRoutes from './location-routes'
import surveyRoutes from './survey-routes'

const router = Router()

router.use('/location', locationRoutes)
router.use('/survey', surveyRoutes)

export default router
