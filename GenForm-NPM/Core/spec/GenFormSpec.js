import GenForm from '../index.js'

describe('GenForm should', function () {
  it('be a class', function () {
    expect(typeof GenForm).toBe(typeof class {})
  })

  it('contains function toForm with two arguments', function () {
    expect(GenForm.toForm.length).toBe(2)
  })

  it('contains a list with all valid input elements', function () {
    expect(GenForm.validTypes.length).toBe(22)
  })

  it('contains a list with all valid input attributes', function () {
    expect(GenForm.validAttributes.length).toBe(35)
  })
})
