/*
Structure of the object :
{
    "elems": [
        {
            "type": "text",
            "name": "username",
            "label": "Username",
            "placeholder": "Enter your username",
            "required": "true"
        },
        {
            "type": "password",
            "name": "password",
            "label": "Password",
            "placeholder": "Enter your password",
            "required": "true"
        },
        {
            "type": "checkbox",
            "name": "remember",
            "label": "Remember me",
            "required": "false"
        },
        {
            "type": "submit",
            "value": "Login"
        }
    ],
    "params": {
        "action": "/login",
        "method": "POST"
    }
}

Diffirent types of elements:
[
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week"
]

Different attributes:
[
    "accept",
    "alt",
    "autocomplete",
    "autofocus",
    "capture",
    "checked",
    "dirname",
    "disabled",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "height",
    "list",
    "max",
    "maxlength",
    "min",
    "minlength",
    "multiple",
    "name",
    "pattern",
    "placeholder",
    "popovertarget",
    "popovertargetaction",
    "readonly",
    "required",
    "size",
    "src",
    "step",
    "type",
    "value",
    "width"
]
*/

/**
 * This class will contain all the functions to generate and manipulate forms
 */

class GenForm {
    constructor() {}
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
 * @typedef {Object} formObj
 * @property {inputElem[]} elems The list of the inputs and their parameters
 * @property {formParams} params The parameters of the form
 */

/**
 * This function creates a form in the DOM from an object listing the required inputs and their parameters
 * @param {Document} document The required document object to create form's elements
 * @param {formObj} obj The object containing the required inputs, their parameters and the form parameters
 * @returns The InnerHTML of the form containing the elements listed in the object
 */

GenForm.toForm = function (document, obj) {
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

/*TODO: Parser de form html into json
genform.toJson = function(formInHtml) {
    let form = {};
    form.params = {};
    form.elems = [];
    form.params.action = formInHtml.getAttribute("action");
    form.params.method = formInHtml.getAttribute("method");
    let inputs = formInHtml.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let elem = {};
        let keys = Object.keys(input);
        for (let key in keys) {
            elem[keys[key]] = input[keys[key]];
        }
        form.elems.push(elem);
    }
    return form;
}*/

export default GenForm
