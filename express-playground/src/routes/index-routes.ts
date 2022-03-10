import { Router } from 'express'
import locationRoutes from './location-routes'
import surveyRoutes from './survey-routes'
import timezoneExampleRoutes from './timezone-example-routes'

const router = Router()

router.use('/location', locationRoutes)
router.use('/survey', surveyRoutes)
router.use('/tz', timezoneExampleRoutes)

export default router
