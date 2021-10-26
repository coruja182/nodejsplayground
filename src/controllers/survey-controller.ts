import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { Survey } from "../models"

const survey_get = (request: Request<number>, response: Response<Survey>) => {
  response
    .status(StatusCodes.NOT_IMPLEMENTED)
    .send({
      id: 'survey-id-1',
      title: 'survey title'
    })
}

const survey_post = (request: Request<Survey>, response: Response<Survey>) => {
  response
    .status(StatusCodes.NOT_IMPLEMENTED)
    .send({
      id: 'survey-id-1',
      title: 'survey title'
    })
}

export default {
  survey_get,
  survey_post
}
