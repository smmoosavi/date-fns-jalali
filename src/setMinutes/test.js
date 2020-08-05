// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setMinutes from '.'

describe('setMinutes', function() {
  it('sets the minutes', function() {
    var result = setMinutes(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40),
      45
    )
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 45, 40)
    )
  })

  it('accepts a timestamp', function() {
    var result = setMinutes(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(),
      5
    )
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 5)
    )
  })

  it('converts a fractional number to an integer', function() {
    var result = setMinutes(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40),
      45.54
    )
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 45, 40)
    )
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = setMinutes(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40),
      // $ExpectedMistake
      '45'
    )
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 45, 40)
    )
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30)
    setMinutes(date, 15)
    assert.deepEqual(
      date,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setMinutes(new Date(NaN), 45)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setMinutes(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40),
      NaN
    )
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setMinutes.bind(null), TypeError)
    assert.throws(setMinutes.bind(null, 1), TypeError)
  })
})
