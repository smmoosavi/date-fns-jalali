// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isThisQuarter from '.'

describe('isThisQuarter', function () {
  let clock: sinon.SinonFakeTimers
  beforeEach(function () {
    clock = sinon.useFakeTimers(
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same quarter (and year)', function () {
    const date = /* 1393/8/11 */ new Date(2014, 10 /* Nov */, 2)
    assert(isThisQuarter(date) === true)
  })

  it('returns false if the given date and the current date have different quarters', function () {
    const date = /* 1392/11/22 */ new Date(2014, 1 /* Feb */, 11)
    assert(isThisQuarter(date) === false)
  })

  it('accepts a timestamp', function () {
    const date = /* 1393/8/11 */ new Date(2014, 10 /* Jul */, 2).getTime()
    assert(isThisQuarter(date) === true)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    // @ts-expect-error
    assert.throws(isThisQuarter.bind(null), TypeError)
  })
})
