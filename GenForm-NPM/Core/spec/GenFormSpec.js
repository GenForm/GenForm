import GenForm from '../index.js'

describe('GenForm should', function () {
  it('be a class', function () {
    expect(typeof GenForm).toBe(typeof class {})
  })

  it('contain function toForm with two arguments', function () {
    expect(GenForm.toForm.length).toBe(2)
  })

  it('contain a list with all valid input elements', function () {
    expect(GenForm.validTypes.length).toBe(24)
  })

  it('contain a list with all valid input attributes', function () {
    expect(GenForm.validAttributes.length).toBe(36)
  })
})
