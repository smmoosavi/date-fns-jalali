// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import closestIndexTo from '.'

describe('closestIndexTo', function () {
  it('returns the date index from the given array closest to the given date', function () {
    var date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2)
    var result = closestIndexTo(date, [
      /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2),
    ])
    assert.equal(result, 0)
  })

  it('works if the closest date from the given array is before the given date', function () {
    var date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500)
    var result = closestIndexTo(date, [
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2, 6, 30, 10),
    ])
    assert.equal(result, 1)
  })

  it('accepts timestamps', function () {
    var date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime()
    var result = closestIndexTo(date, [
      /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31).getTime(),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2).getTime(),
    ])
    assert.equal(result, 0)
  })

  it('returns undefined if the given array is empty', function () {
    var date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime()
    var result = closestIndexTo(date, [])
    assert(result == null)
  })

  it('returns NaN if the given date is `Invalid Date`', function () {
    var date = new Date(NaN)
    var result = closestIndexTo(date, [
      /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2),
    ])
    assert(isNaN(result))
  })

  it('returns NaN if any date in the given array is `Invalid Date`', function () {
    var date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2)
    var result = closestIndexTo(date, [
      /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2),
    ])
    assert(isNaN(result))
  })

  it('returns NaN if any value in the given array is undefined', function () {
    var date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2)
    var result = closestIndexTo(date, [
      /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31),
      // $ExpectedMistake
      undefined,
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2),
    ])
    assert(isNaN(result))
  })

  it('converts Array-like objects into Array', function () {
    var date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2)
    var object = {
      '0': /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31),
      '1': /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2),
      length: 2,
    }
    // $ExpectedMistake
    var result = closestIndexTo(date, object)
    assert.equal(result, 0)
  })

  it('converts undefined into empty array', function () {
    var date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime()
    // $ExpectedMistake
    var result = closestIndexTo(date, undefined)
    assert(result == null)
  })

  it('converts null into empty array', function () {
    var date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime()
    // $ExpectedMistake
    var result = closestIndexTo(date, null)
    assert(result == null)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(closestIndexTo.bind(null), TypeError)
    assert.throws(closestIndexTo.bind(null, 1), TypeError)
  })
})
