import { mocked } from 'ts-jest/utils'
import { getMockReq, getMockRes } from '@jest-mock/express';
import { StatusCodes } from 'http-status-codes';
import { dateFnsTimezoneController } from ".";
import { datefnsTimezoneService, TimezoneService } from '../service'

// SETUP MOCKS
jest.mock('../service', () => {
  return {
    datefnsTimezoneService: {
      iso8601ToWeirdBrazilFormat: jest.fn()
    }
  }
})

const expectedTimestamp = '2021-10-20-09.11.22.333333';

describe('The TimezoneExampleController', () => {
  let mockReq: ReturnType<typeof getMockReq>, mockRes: ReturnType<typeof getMockRes>
  const mockedDatefnsTimezoneService = mocked(datefnsTimezoneService, true);

  beforeEach(() => {
    mockReq = getMockReq()
    mockRes = getMockRes()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('The get endpoint responds OK, make all service calls and returns the json payload', () => {
    // prepare
    mockedDatefnsTimezoneService.iso8601ToWeirdBrazilFormat.mockReturnValue(expectedTimestamp)
    const { res } = mockRes

    // execute
    dateFnsTimezoneController.get(mockReq, res)

    // assert
    expect(res.status).toBeCalledWith(StatusCodes.OK)
    expect(mockedDatefnsTimezoneService.iso8601ToWeirdBrazilFormat).toHaveBeenCalled()
    expect(res.json).toHaveBeenCalledWith({
      id: expect.anything(),
      modificationTimestamp: expectedTimestamp
    })
  })
})
