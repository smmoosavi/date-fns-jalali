// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfYear from '.'

describe('endOfYear', function () {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of a year', function () {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = endOfYear(date)
    assert.deepEqual(
      result,
      /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', function () {
    const date = /* 1393/6/11 */ new Date(
      2014,
      8 /* Sep */,
      2,
      11,
      55,
      0
    ).getTime()
    const result = endOfYear(date)
    assert.deepEqual(
      result,
      /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function () {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfYear(date)
    assert.deepEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = endOfYear(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(endOfYear.bind(null), TypeError)
  })
})
