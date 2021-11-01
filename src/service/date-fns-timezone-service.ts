import TimezoneService from "./timezone-service";
import { parse } from "date-fns"
import { zonedTimeToUtc, utcToZonedTime, format, toDate } from "date-fns-tz"
import { TIMEZONE_SAO_PAULO } from "./service-constants";

const TIMESTAMP_NEW_PATTERN = 'yyyy-MM-dd-HH.mm.ss'

export default class DateFnsTimezoneService implements TimezoneService {

  constructor() {
  }

  iso8601ToWeirdBrazilFormat = (utcDateStr: string | undefined): string | undefined => {
    if (utcDateStr === undefined) {
      return utcDateStr
    }

    const split = utcDateStr.split(/(\.\d+)?Z/g)
    const utcDatePart = `${split[0]}Z`
    const fractionPart = split[1] || ''

    const parsedInLocalTimezone = new Date(utcDatePart)
    const zoned = utcToZonedTime(parsedInLocalTimezone, TIMEZONE_SAO_PAULO)

    const formatted = format(zoned, TIMESTAMP_NEW_PATTERN) + fractionPart
    return formatted
  }

  weirdBrazilFormatToIso8601 = (brDateStr: string | undefined): string | undefined => {

    if (brDateStr === undefined) {
      return brDateStr
    }

    const split = brDateStr.match(/.{1,19}/g)
    const dateWithoutMiliseconds = split![0]
    const fractionOfSeconds = split![1] || ''
    const parsedInLocalTimezone = parse(dateWithoutMiliseconds, TIMESTAMP_NEW_PATTERN, new Date())
    const correctTimezone = zonedTimeToUtc(parsedInLocalTimezone, TIMEZONE_SAO_PAULO)
    return correctTimezone.toISOString().replace(/\.\d+Z/, `${fractionOfSeconds}Z`)
  }
}
