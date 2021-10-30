export default interface TimezoneService {
  iso8601ToWeirdBrazilFormat: (utcDateStr: string|undefined) => string|undefined;
  weirdBrazilFormatToIso8601: (brDateStr: string|undefined) => string|undefined
}
