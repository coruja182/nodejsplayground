import express from "express";
import { surveyController } from "../controllers";

const router = express.Router()

router.get('/:id', surveyController.survey_get)
router.post('/', surveyController.survey_post)

export default router
