import TimezoneService from './timezone-service'
import { DateTime } from 'luxon'

/**
const isoDateStr = '2021-10-20T12:11:22.33333Z'
const isoDateStr_short = '2021-10-20T12:11:22Z'
const brFormat = '2021.10.20-12:11:22.33333'
const brFormat_short = '2021.10.20-12:11:22'
 */
export default class LuxonTimezoneService implements TimezoneService {

  iso8601ToWeirdBrazilFormat = (utcDateStr: string | undefined): string | undefined => {
    if (utcDateStr === undefined) {
      return utcDateStr
    }

    const split = utcDateStr.split(/(\.\d+)?Z/g)
    const datePart = split[0]
    const fractionPart = split[1] || ''

    const parsed = DateTime.fromISO(datePart, {zone: 'utc'})
    const rezoned = parsed.setZone('America/Sao_Paulo')
    const formatted = rezoned.toFormat('yyyy.MM.dd-hh:mm:ss') + fractionPart
    return formatted
  }

  weirdBrazilFormatToIso8601 = (brDateStr: string | undefined): string | undefined => {

    if (brDateStr === undefined) {
      return brDateStr
    }

    const split = brDateStr.match(/.{1,19}/g) || []
    const datePart = split[0]
    const fractionPart = split[1] || ''

    return datePart
  }
}
