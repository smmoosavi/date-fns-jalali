// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getMinutes from '.'

describe('getMinutes', function() {
  it('returns the minutes of the given date', function() {
    var result = getMinutes(
      /* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29, 11, 45, 5)
    )
    assert(result === 45)
  })

  it('accepts a timestamp', function() {
    var result = getMinutes(
      /* 1393/1/13 */ new Date(2014, 3 /* Apr */, 2, 23, 30).getTime()
    )
    assert(result === 30)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getMinutes(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getMinutes.bind(null), TypeError)
  })
})
