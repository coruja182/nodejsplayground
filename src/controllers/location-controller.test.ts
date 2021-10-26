import { getMockReq, getMockRes } from '@jest-mock/express';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LocationWithTimezone from '../models/location-with-timezones';
import locationController from './location-controller';

describe('The location controller', () => {

  let request: Request, response: Response<LocationWithTimezone[]>, nextFn: NextFunction;

  beforeEach(() => {
    request = getMockReq()
    response = getMockRes().res
    nextFn = jest.fn()
  });

  describe('When calling getTimezones', () => {
    it('should return OK and anything in the response', () => {
      locationController.timezones_get(request, response, nextFn);
      expect(response.status).toBeCalledWith(StatusCodes.OK)
      expect(response.json).toBeCalledWith(
        expect.anything()
      );
    })
  });
})
