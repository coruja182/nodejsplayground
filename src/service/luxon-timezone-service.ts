import TimezoneService from './timezone-service'
import { DateTime } from 'luxon'
import { TIMEZONE_SAO_PAULO } from './service-constants';

const TIMESTAMP_NEW_PATTERN = 'yyyy-MM-dd-hh.mm.ss';
export default class LuxonTimezoneService implements TimezoneService {

  iso8601ToWeirdBrazilFormat = (utcDateStr: string | undefined): string | undefined => {
    if (utcDateStr === undefined) {
      return utcDateStr
    }

    const split = utcDateStr.split(/(\.\d+)?Z/g)
    const datePart = split[0]
    const fractionPart = split[1] || ''

    const parsed = DateTime.fromISO(datePart, {zone: 'utc'})
    const rezoned = parsed.setZone(TIMEZONE_SAO_PAULO)
    const formatted = rezoned.toFormat(TIMESTAMP_NEW_PATTERN) + fractionPart
    return formatted
  }

  weirdBrazilFormatToIso8601 = (brDateStr: string | undefined): string | undefined => {

    if (brDateStr === undefined) {
      return brDateStr
    }

    const split = brDateStr.match(/.{1,19}/g)
    const datePart = split![0]
    const fractionPart = split![1] || ''

    const parsed = DateTime.fromFormat(datePart, 'yyyy-MM-dd-hh.mm.ss', {
      zone: 'America/Sao_Paulo'
    })

    return parsed.setZone('utc').toISO({
      suppressMilliseconds: true,
      includeOffset: false
    }) + `${fractionPart}Z`
  }
}
