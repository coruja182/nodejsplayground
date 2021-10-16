import { getMockReq, getMockRes } from '@jest-mock/express';
import { StatusCodes } from 'http-status-codes';
import { getTimezones } from './location-controller';

describe('The location controller', () => {

  let request, response;

  beforeEach(() => {
    request = getMockReq();
    response = getMockRes();
  });

  describe('When calling getTimezones', () => {
    it('should return OK and anything in the response', () => {
      getTimezones(request, response.res, response.next);

      expect(response.res.status).toBeCalledWith(StatusCodes.OK)
      expect(response.res.json).toBeCalledWith(
        expect.anything()
      );
    })
  });
})
