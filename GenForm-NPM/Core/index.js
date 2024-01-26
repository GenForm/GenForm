// MDN WebSite for input doc : https://developer.mozilla.org/fr/docs/Web/HTML/Element/input

/**
 * This class will contain all the functions to generate and manipulate forms
 */

class GenForm {
  static validTypes = [
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'label',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'select',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week'
  ]

  // TODO: Check if attributes are valid for the corresponding type
  static validAttributes = [
    'accept',
    'alt',
    'autocapitalize',
    'autocomplete',
    'autofocus',
    'capture',
    'checked',
    'dirname',
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'height',
    'list',
    'max',
    'maxlength',
    'min',
    'minlength',
    'multiple',
    'name',
    'pattern',
    'placeholder',
    'popovertarget',
    'popovertargetaction',
    'readonly',
    'required',
    'size',
    'src',
    'step',
    'type',
    'value',
    'width'
  ]
}

/**
 * @typedef {Object} inputElem
 * @property {String} type The type of the input
 * @property {String} name The name of the input
 * @property {String} label The label of the input
 * @property {String} placeholder The placeholder of the input
 * @property {Boolean} required The required attribute of the input
 */

/**
 * @typedef {Object} formParams
 * @property {String} action The action of the form
 * @property {String} method The method of the form
 */

/**
 * @typedef {Object} FormObj
 * @property {inputElem[]} elems The list of the inputs and their parameters
 * @property {formParams} params The parameters of the form
 */

/**
 * This function creates a form in the DOM from an object listing the required inputs and their parameters
 * @param {Document} document The required document object to create form's elements
 * @param {FormObj} obj The object containing the required inputs, their parameters and the form parameters
 * @returns The InnerHTML of the form containing the elements listed in the object
 */

GenForm.toForm = function (document, obj) {
  // Security check
  try {
    jsonIsCorrect(obj)
    nameIsDuplicate(obj)
  } catch (e) {
    e.message = 'Error in GenForm, the JSON has: ' + e.message
    throw e
  }

  const form = document.createElement('form')
  form.setAttribute('action', obj.params.action)
  form.setAttribute('method', obj.params.method)

  obj.elems.forEach(function (elem) {
    const element = document.createElement('input')
    const keys = Object.keys(elem)
    for (const key in keys) {
      element.setAttribute(keys[key], elem[keys[key]])
    }
    form.appendChild(element)
  })
  return form
}

function nameIsDuplicate(jsonObj) {
  const name = {}
  const elems = jsonObj.elems

  for (let i = 0; i < elems.length; i++) {
    if (name[elems[i].name] !== undefined) {
      throw new Error('Duplicate name: ' + elems[i].name)
    } else {
      name[elems[i].name] = elems[i].name
    }
  }
}

function jsonIsCorrect(inputJSON) {
  if (!inputJSON || Object.keys(inputJSON).length === 0) {
    throw new Error('Empty JSON')
  }

  if (!inputJSON.elems) {
    throw new Error('"elems" field is missing')
  }

  if (!inputJSON.params || typeof inputJSON.params !== 'object') {
    throw new Error('"params" field is missing')
  }

  if (!inputJSON.params.action) {
    throw new Error('"action" field in "params" is missing')
  }

  for (const elem of inputJSON.elems) {
    if (!GenForm.validTypes.includes(elem.type)) {
      throw new Error('invalid type: ' + elem.type)
    }

    for (const key in elem) {
      if (!GenForm.validAttributes.includes(key)) {
        throw new Error('invalid attribute: ' + key)
      }
    }
  }
}

export default GenForm
