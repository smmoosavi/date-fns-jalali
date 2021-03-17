// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isWeekend from '.'

describe('isWeekend', function () {
  it('returns true if the given date is in a weekend', function () {
    var result = isWeekend(/* 1393/7/13 */ new Date(2014, 9 /* Oct */, 5))
    assert(result === true)
  })

  it('returns false if the given date is not in a weekend', function () {
    var result = isWeekend(/* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6))
    assert(result === false)
  })

  it('accepts a timestamp', function () {
    var result = isWeekend(
      /* 1393/7/13 */ new Date(2014, 9 /* Oct */, 5).getTime()
    )
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    var result = isWeekend(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isWeekend.bind(null), TypeError)
  })
})
