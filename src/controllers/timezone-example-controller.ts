import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TimezoneExample } from "../models";
import { TimezoneService } from "../service";

export default class TimezoneExampleController {

  private service: TimezoneService

  constructor(serviceImplementation: TimezoneService) {
    this.service = serviceImplementation
  }

  get = (request: Request<any>, response: Response<TimezoneExample>) => {

    const payload = {
      id: '0',
      modificationTimestamp: this.service.iso8601ToWeirdBrazilFormat(new Date().toISOString())
    }

    response
      .status(StatusCodes.OK)
      .json(payload)
  }

  post = (request: Request<TimezoneExample>, response: Response<TimezoneExample>) => {
    console.log(JSON.stringify(request.body))
    response
      .status(StatusCodes.OK)
      .json({
        id: request.body?.id,
        modificationTimestamp: this.service.iso8601ToWeirdBrazilFormat(new Date().toISOString())
      })
  }
}
