import { datefnsTimezoneService, luxonTimezoneService } from '../service';
import LuxonTimezoneService from '../service/luxon-timezone-service';
import locationController from './location-controller';
import surveyController from './survey-controller'
import TimezoneExampleController from './timezone-example-controller'

const dateFnsTimezoneController = new TimezoneExampleController(datefnsTimezoneService)
const luxonTimezoneController = new TimezoneExampleController(luxonTimezoneService)

export {
  locationController,
  surveyController,
  dateFnsTimezoneController,
  luxonTimezoneController
}
