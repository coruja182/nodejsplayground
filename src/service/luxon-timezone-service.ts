import TimezoneService from './timezone-service'
import { DateTime } from 'luxon'
import { SERVICE_TIMEZONE } from './service-constants';

const TIMESTAMP_NEW_PATTERN = 'yyyy-MM-dd-HH.mm.ss';
export default class LuxonTimezoneService implements TimezoneService {

  utcIso8601ToServiceTimestamp = (utcDateStr: string | undefined): string | undefined => {
    if (utcDateStr === undefined) {
      return utcDateStr
    }
    const [datePart, fractionPart] = utcDateStr.split(/(\.\d+)?Z/g)
    const rezoned = DateTime
      .fromISO(datePart, { zone: 'utc' })
      .setZone(SERVICE_TIMEZONE)
    const formatted = rezoned.toFormat(TIMESTAMP_NEW_PATTERN) + (fractionPart || '')
    return formatted
  }

  serviceTimestampToUtcIso8601 = (brDateStr: string | undefined): string | undefined => {
    if (brDateStr === undefined) {
      return brDateStr
    }
    const [datePart, fractionPart] = brDateStr.match(/.{1,19}/g) || []
    const parsed = DateTime.fromFormat(datePart, TIMESTAMP_NEW_PATTERN, {
      zone: SERVICE_TIMEZONE
    })
    return parsed.setZone('utc').toISO({
      suppressMilliseconds: true,
      includeOffset: false
    }) + `${fractionPart || ''}Z`
  }
}
