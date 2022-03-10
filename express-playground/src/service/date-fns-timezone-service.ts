import TimezoneService from "./timezone-service";
import { parse } from "date-fns"
import { zonedTimeToUtc, utcToZonedTime, format, toDate } from "date-fns-tz"
import { SERVICE_TIMEZONE } from "./service-constants";

const TIMESTAMP_NEW_PATTERN = 'yyyy-MM-dd-HH.mm.ss'

export default class DateFnsTimezoneService implements TimezoneService {

  constructor() {
  }

  utcIso8601ToServiceTimestamp = (utcDateStr: string | undefined): string | undefined => {
    if (utcDateStr === undefined) {
      return utcDateStr
    }

    const split = utcDateStr.split(/(\.\d+)?Z/g)
    const utcDatePart = `${split[0]}Z`
    const fractionPart = split[1] || ''

    const parsedInLocalTimezone = new Date(utcDatePart)
    const zoned = utcToZonedTime(parsedInLocalTimezone, SERVICE_TIMEZONE)

    const formatted = format(zoned, TIMESTAMP_NEW_PATTERN) + fractionPart
    return formatted
  }

  serviceTimestampToUtcIso8601 = (serviceTimestamp: string | undefined): string | undefined => {

    if (serviceTimestamp === undefined) {
      return serviceTimestamp
    }
    const split = serviceTimestamp.match(/.{1,19}/g)
    const dateWithoutMiliseconds = split![0]
    const fractionOfSeconds = split![1] || ''
    const parsedInLocalTimezone = parse(dateWithoutMiliseconds, TIMESTAMP_NEW_PATTERN, new Date())
    const correctTimezone = zonedTimeToUtc(parsedInLocalTimezone, SERVICE_TIMEZONE)
    return correctTimezone.toISOString().replace(/\.\d+Z/, `${fractionOfSeconds}Z`)
  }
}
