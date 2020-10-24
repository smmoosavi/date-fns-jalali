// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subMonths from '.'

describe('subMonths', function() {
  it('subtracts the given number of months', function() {
    var result = subMonths(/* 1393/11/12 */ new Date(2015, 1 /* Feb */, 1), 5)
    assert.deepEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function() {
    var result = subMonths(
      /* 1394/6/10 */ new Date(2015, 8 /* Sep */, 1).getTime(),
      12
    )
    assert.deepEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('converts a fractional number to an integer', function() {
    var result = subMonths(
      /* 1393/11/12 */ new Date(2015, 1 /* Feb */, 1),
      5.999
    )
    assert.deepEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = subMonths(/* 1393/11/12 */ new Date(2015, 1 /* Feb */, 1), '5')
    assert.deepEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    subMonths(date, 12)
    assert.deepEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
    var date = /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31)
    var result = subMonths(date, 3)
    assert.deepEqual(result, /* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30))
  })

  it('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setFullYear(1, 2 /* Mar */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(1, 1 /* Feb */, 28)
    expectedResult.setHours(0, 0, 0, 0)
    var result = subMonths(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = subMonths(new Date(NaN), 5)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = subMonths(/* 1393/11/12 */ new Date(2015, 1 /* Feb */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subMonths.bind(null), TypeError)
    assert.throws(subMonths.bind(null, 1), TypeError)
  })
})
