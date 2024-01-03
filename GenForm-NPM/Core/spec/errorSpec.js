import GenForm from '../index.js'

const errorPrefix = 'Error in GenForm, the JSON has: '

const mockDocument = {
  createElement: function (type) {
    return {
      type: type,
      attributes: {},
      setAttribute: function (attribute, value) {
        this.attributes[attribute] = value
      },
      getAttribute: function (attribute) {
        return this.attributes[attribute]
      }
    }
  }
}

describe('GenForm.toForm should throw errors when JSON', function () {
  it('is empty', function () {
    expect(() => GenForm.toForm(mockDocument, {})).toThrowError(
      errorPrefix + 'Empty JSON'
    )
  })

  it('has no elems', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        { params: { action: '/login', method: 'POST' } }
      )
    ).toThrowError(errorPrefix + '"elems" field is missing')
  })

  it('has no params', function () {
    expect(() =>
      GenForm.toForm(mockDocument, { elems: [{ type: 'text', name: 'username' }] })
    ).toThrowError(errorPrefix + '"params" field is missing')
  })

  it('has no action', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        {
          elems: [{ type: 'text', name: 'username' }],
          params: { method: 'POST' }
        }
      )
    ).toThrowError(errorPrefix + '"action" field in "params" is missing')
  })

  it('has a non existing input type', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        {
          elems: [{ type: 'invalid', name: 'username' }],
          params: { action: '/login', method: 'POST' }
        }
      )
    ).toThrowError(errorPrefix + 'invalid type: invalid')
  })

  it('has a non existing attribute for an input', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        {
          elems: [{ type: 'text', name: 'username', invalid: 'invalid' }],
          params: { action: '/login', method: 'POST' }
        }
      )
    ).toThrowError(errorPrefix + 'invalid attribute: invalid')
  })

  it('has two or more inputs with the same name', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        {
          elems: [
            { type: 'text', name: 'username' },
            { type: 'text', name: 'username' }
          ],
          params: { action: '/login', method: 'POST' }
        }
      )
    ).toThrowError(errorPrefix + 'Duplicate name: username')
  })
})

describe('GenForm.toForm should return an error when inputs', function () {
  xit('have no type', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        {
          elems: [{ name: 'username' }],
          params: { action: '/login', method: 'POST' }
        }
      )
    ).toThrowError(errorPrefix + 'invalid type: undefined')
  })

  xit('have no name', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        {
          elems: [{ type: 'text' }],
          params: { action: '/login', method: 'POST' }
        }
      )
    ).toThrowError(errorPrefix + 'invalid attribute: undefined')
  })

  xit('do not have appropriate attributes for their type (text)', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        {
          elems: [{ type: 'text', name: 'username', min: '50' }],
          params: { action: '/login', method: 'POST' }
        }
      )
    ).toThrowError(errorPrefix + 'invalid attribute for type text: min')
  })

  xit('do not have appropriate attributes for their type (image)', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        {
          elems: [{ type: 'image', name: 'submit' }],
          params: { action: '/login', method: 'POST' }
        }
      )
    ).toThrowError(errorPrefix + 'invalid attribute for type image: name')
  })

  xit('do not have appropriate attributes for their type (radio)', function () {
    expect(() =>
      GenForm.toForm(
        mockDocument,
        {
          elems: [{ type: 'radio', value: 'apple' }],
          params: { action: '/login', method: 'POST' }
        }
      )
    ).toThrowError(errorPrefix + 'invalid attribute for type radio: value')
  })

});
