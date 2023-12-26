// UNPKG allow to retrieve a specific file from a node package (here a minified version of the core of GenForm)
import genform from 'https://unpkg.com/@genform/core@0.0.4/index.min.js'

// Because of this js file is called from index.html using a script tag with type="module", the function changeForm is not accessible from the global scope
// To allow the function to be called whenever the button is clicked, we need to add an event listener to the button
const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', changeForm)

genform.toForm = function(obj) {
    const form = document.createElement('form')
    form.setAttribute('action', obj.params.action)
    form.setAttribute('method', obj.params.method)

    isNameDuplicate(obj)

    obj.elems.forEach((elem) => {
        const element = document.createElement('input')
        const keys = Object.keys(elem)
        for (const key in keys) {
            element.setAttribute(keys[key], elem[keys[key]])
        }
        form.appendChild(element)
    })
    return form
}

function isNameDuplicate(jsonObj) {
    const name = {}
    const elems = jsonObj.elems

    for (let i = 0; i < elems.length; i++) {
        if (name[elems[i].name] !== undefined) {
            alert('duplicate value in : ' + elems[i].name)
            throw new Error('duplicate value in : ' + elems[i].name)
        } else {
            name[elems[i].name] = elems[i].name
        }
    }
}

function isJsonCorrect(inputJSON) {
    const validTypes = [
        'button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file',
        'hidden', 'image', 'month', 'number', 'password', 'radio', 'range',
        'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'
    ]
    const validAttributes = [
        'accept', 'alt', 'autocomplete', 'autofocus', 'capture', 'checked',
        'dirname', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod',
        'formnovalidate', 'formtarget', 'height', 'list', 'max', 'maxlength',
        'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder',
        'popovertarget', 'popovertargetaction', 'readonly', 'required', 'size',
        'src', 'step', 'type', 'value', 'width'
    ]
    try {
        inputJSON = JSON.parse(inputJSON)

        if (!inputJSON || Object.keys(inputJSON).length === 0) {
            console.log('JSON is empty')
            return false
        }

        if (!inputJSON.elems) {
            alert('elems field is missing')
            return false
        }
        if (!inputJSON.params || typeof inputJSON.params !== 'object') {
            alert('params field is missing')
            return false
        }

        if (!inputJSON.params.action) {
            alert('action in params field is missing')
            return false
        }

        if (!Array.isArray(inputJSON.elems)) {
            alert('elems field must be an array')
            return false
        }

        for (const elem of inputJSON.elems) {
            if (!validTypes.includes(elem.type)) {
                alert('invalid type: ' + elem.type)
                return false
            }

            for (const key in elem) {
                if (!validAttributes.includes(key)) {
                    alert('invalid attribute: ' + key)
                    return false
                }
            }
        }
        return true
    } catch (e) {
        alert('error while processing' + e.message)
    }
}

function changeForm() {
    const json = document.getElementById('changeform').value
    if (isJsonCorrect(json)) {
        const obj = JSON.parse(json)
        const formInHtml = document.getElementById('genform')
        const form = genform.toForm(obj)
        formInHtml.innerHTML = ''
        formInHtml.appendChild(form)
    }
}

