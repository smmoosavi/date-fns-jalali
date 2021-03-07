import toInteger from '../toInteger/index'
import toDate from '../../toDate/index'
import requiredArgs from '../requiredArgs/index'

import coreGetUTCDate from '../../_core/getUTCDate/index'
import coreSetUTCDate from '../../_core/setUTCDate/index'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn =
    locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate)
  var day = date.getUTCDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  coreSetUTCDate(date, coreGetUTCDate(date) - diff)
  date.setUTCHours(0, 0, 0, 0)
  return date
}
