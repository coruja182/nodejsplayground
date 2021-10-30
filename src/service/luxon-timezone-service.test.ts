import LuxonTimezoneService from './luxon-timezone-service'
import TimezoneService from './timezone-service'

const timezoneService: TimezoneService = new LuxonTimezoneService()

const isoDateStr = '2021-10-20T12:11:22.33333Z'
const isoDateStr_short = '2021-10-20T12:11:22Z'

const brFormat = '2021.10.20-09:11:22.33333'
const brFormat_short = '2021.10.20-09:11:22'

describe('The LuxonTimezoneService', () => {
  describe('the iso8601ToWeirdBerlinFormat', () => {
    it('When provided a undefined value returns undefined', () => {
      const result = timezoneService.iso8601ToWeirdBrazilFormat(undefined)
      expect(result).toBe(undefined)
    })

    it('When provided a UTC timestamp should return tue equivalent Brazilian time in its format', () => {
      const result = timezoneService.iso8601ToWeirdBrazilFormat(isoDateStr)
      expect(result).toEqual(brFormat)
    })

    it('When provided a UTC timestamp in short format should return tue equivalent Brazilian time in its format', () => {
      const result = timezoneService.iso8601ToWeirdBrazilFormat(isoDateStr_short)
      expect(result).toEqual(brFormat_short)
    })
  })

  describe('the weirdBerlinFormatToIso8601', () => {
    it('When provided a undefined value returns undefined', () => {
      const result = timezoneService.weirdBrazilFormatToIso8601(undefined)
      expect(result).toBe(undefined)
    })

    it('When provided a brazilian timestamp value returns the correspondent iso8601 utc timestamp', () => {
      const result = timezoneService.weirdBrazilFormatToIso8601(brFormat)
      expect(result).toBe(isoDateStr)
    })

    it('When provided a brazilian timestamp in short format value returns the correspondent iso8601 utc timestamp', () => {
      const result = timezoneService.weirdBrazilFormatToIso8601(brFormat_short)
      expect(result).toBe(isoDateStr_short)
    })
  })
})
