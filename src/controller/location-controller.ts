import express, { Request, Response, NextFunction } from 'express';
import StatusCodes  from 'http-status-codes';
import LocationWithTimezone from '../model/location-with-timezones';

const locationController = express.Router()

const getTimezones = (request: Request, response: Response<LocationWithTimezone[]>, next: NextFunction) => {
  const locations: LocationWithTimezone[] = [
    {
      location: 'Germany',
      timezoneName: 'Central European Time',
      timezoneAbbr: 'CET',
      utcOffset: 1
    },
    {
      location: 'China',
      timezoneName: 'China Standard Time',
      timezoneAbbr: 'CST',
      utcOffset: 8
    },
    {
      location: 'Argentina',
      timezoneName: 'Argentina Time',
      timezoneAbbr: 'ART',
      utcOffset: -3
    },
    {
      location: 'Japan',
      timezoneName: 'Japan Standard Time',
      timezoneAbbr: 'JST',
      utcOffset: 9
    }
  ];

  response.status(StatusCodes.OK).json(locations);
}

locationController.get('/timezones', getTimezones);

export {
  locationController,
  getTimezones
}
