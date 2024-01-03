import GenForm from '../index.js'
import { JSDOM } from 'jsdom'

const mockDocument = new JSDOM(`
<!DOCTYPE html>
<body>
    <div></div>
</body>
`).window.document

describe('GenForm.toForm should', function () {
  it('return a form with the correct action and method', function () {
    const form = GenForm.toForm(mockDocument, {
      elems: [],
      params: {
        action: '/login',
        method: 'POST'
      }
    })
    expect(form.getAttribute('action')).toBe('/login')
    expect(form.getAttribute('method')).toBe('POST')
  })

  it('return a form with the correct elements', function () {
    const form = GenForm.toForm(mockDocument, {
      elems: [
        {
          type: 'text',
          name: 'username',
          placeholder: 'Username'
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password'
        },
        {
          type: 'submit',
          value: 'Login'
        }
      ],
      params: {
        action: '/login',
        method: 'POST'
      }
    })
    const inputs = form.querySelectorAll('input')
    expect(inputs.length).toBe(3)
    expect(inputs[0].getAttribute('type')).toBe('text')
    expect(inputs[0].getAttribute('name')).toBe('username')
    expect(inputs[0].getAttribute('placeholder')).toBe('Username')
    expect(inputs[1].getAttribute('type')).toBe('password')
    expect(inputs[1].getAttribute('name')).toBe('password')
    expect(inputs[1].getAttribute('placeholder')).toBe('Password')
    expect(inputs[2].getAttribute('type')).toBe('submit')
    expect(inputs[2].getAttribute('value')).toBe('Login')
  })

  it('return a form with one text input that has all valid attributes', function () {
    const form = GenForm.toForm(mockDocument, {
      elems: [
        {
          autocapitalize: 'on',
          autocomplete: 'username',
          dirname: 'username.dir',
          disabled: false,
          form: 'form-id',
          list: 'datalist-id',
          maxlength: 10,
          minlength: 5,
          name: 'username',
          pattern: '[A-Za-z0-9]+',
          placeholder: 'Username',
          readonly: false,
          required: true,
          size: 10,
          type: 'text',
          value: 'admin'
        }
      ],
      params: {
        action: '/login',
        method: 'POST'
      }
    })
    const inputs = form.querySelectorAll('input')
    expect(inputs.length).toBe(1)
    expect(inputs[0].getAttribute('autocapitalize')).toBe('on')
    expect(inputs[0].getAttribute('autocomplete')).toBe('username')
    expect(inputs[0].getAttribute('dirname')).toBe('username.dir')
    expect(inputs[0].getAttribute('disabled')).toBe('false')
    expect(inputs[0].getAttribute('form')).toBe('form-id')
    expect(inputs[0].getAttribute('list')).toBe('datalist-id')
    expect(inputs[0].getAttribute('maxlength')).toBe('10')
    expect(inputs[0].getAttribute('minlength')).toBe('5')
    expect(inputs[0].getAttribute('name')).toBe('username')
    expect(inputs[0].getAttribute('pattern')).toBe('[A-Za-z0-9]+')
    expect(inputs[0].getAttribute('placeholder')).toBe('Username')
    expect(inputs[0].getAttribute('readonly')).toBe('false')
    expect(inputs[0].getAttribute('required')).toBe('true')
    expect(inputs[0].getAttribute('size')).toBe('10')
    expect(inputs[0].getAttribute('type')).toBe('text')
    expect(inputs[0].getAttribute('value')).toBe('admin')
  })

  it('return a form with an image input that has only its valid attributes', function () {
    const form = GenForm.toForm(mockDocument, {
      elems: [
        {
          alt: 'Image',
          formaction: '/upload',
          formenctype: 'multipart/form-data',
          formmethod: 'POST',
          formnovalidate: false,
          formtarget: '_blank',
          height: 100,
          src: '/image.png',
          type: 'image',
          width: 100
        }
      ],
      params: {
        action: '/login',
        method: 'POST'
      }
    })
    const inputs = form.querySelectorAll('input')
    expect(inputs.length).toBe(1)
    expect(inputs[0].getAttribute('alt')).toBe('Image')
    expect(inputs[0].getAttribute('formaction')).toBe('/upload')
    expect(inputs[0].getAttribute('formenctype')).toBe('multipart/form-data')
    expect(inputs[0].getAttribute('formmethod')).toBe('POST')
    expect(inputs[0].getAttribute('formnovalidate')).toBe('false')
    expect(inputs[0].getAttribute('formtarget')).toBe('_blank')
    expect(inputs[0].getAttribute('height')).toBe('100')
    expect(inputs[0].getAttribute('src')).toBe('/image.png')
    expect(inputs[0].getAttribute('type')).toBe('image')
    expect(inputs[0].getAttribute('width')).toBe('100')
  })
})
