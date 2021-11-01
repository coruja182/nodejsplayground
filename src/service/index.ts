import DateFnsTimezoneService from "./date-fns-timezone-service";
import LuxonTimezoneService from "./luxon-timezone-service";
import TimezoneService from "./timezone-service";

const luxonTimezoneService: TimezoneService = new LuxonTimezoneService()
const datefnsTimezoneService: TimezoneService = new DateFnsTimezoneService()

export {
  datefnsTimezoneService,
  luxonTimezoneService,
  TimezoneService
}
