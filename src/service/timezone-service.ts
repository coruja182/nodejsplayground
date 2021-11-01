/**
 * Motivation
 *
 * There is this use case where this service receives a UTC ISO timestamp (with extra second fraction digits) and responds
 * another timestamp in a weird format (same amount of fraction digits), but in different timezone, so it must convert the dates and timezones
 * before calling it.
 */
export default interface TimezoneService {
  iso8601ToWeirdBrazilFormat: (utcDateStr: string | undefined) => string | undefined;
  weirdBrazilFormatToIso8601: (brDateStr: string | undefined) => string | undefined
}
