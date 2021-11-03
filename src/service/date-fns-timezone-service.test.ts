import { datefnsTimezoneService } from '.'
import { serviceDateStr, serviceDateStr_short, utfDateStr, utfDateStr_short } from './timezone-service-test-commons'

const timezoneService = datefnsTimezoneService

describe('The luxon implementation of TimezoneService', () => {
  describe('the iso8601ToWeirdBerlinFormat', () => {
    it('When provided a undefined value returns undefined', () => {
      const result = timezoneService.utcIso8601ToServiceTimestamp(undefined)
      expect(result).toBe(undefined)
    })

    it('When provided a UTC timestamp should return tue equivalent Brazilian time in its format', () => {
      const result = timezoneService.utcIso8601ToServiceTimestamp(utfDateStr)
      expect(result).toEqual(serviceDateStr)
    })

    it('When provided a UTC timestamp in short format should return tue equivalent Brazilian time in its format', () => {
      const result = timezoneService.utcIso8601ToServiceTimestamp(utfDateStr_short)
      expect(result).toEqual(serviceDateStr_short)
    })
  })

  describe('the weirdBrazilFormatToIso8601', () => {
    it('When provided a undefined value returns undefined', () => {
      const result = timezoneService.serviceTimestampToUtcIso8601(undefined)
      expect(result).toBe(undefined)
    })

    it('When provided a brazilian timestamp value returns the correspondent iso8601 utc timestamp', () => {
      const result = timezoneService.serviceTimestampToUtcIso8601(serviceDateStr)
      expect(result).toBe(utfDateStr)
    })

    it('When provided a brazilian timestamp in short format value returns the correspondent iso8601 utc timestamp', () => {
      const result = timezoneService.serviceTimestampToUtcIso8601(serviceDateStr_short)
      expect(result).toBe(utfDateStr_short)
    })
  })
})
