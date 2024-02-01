# GenForm

## Core Package

Genform is a JavaScript library for creating web forms from JSON or JS. It's designed to be simple and flexible. You can create forms with just a few lines of code. It's also possible to create complex forms with lots of customization.

The Core package is the core of the library. It contains the main functions of the library.

## How to use it ?

First, you need to install the package :

```bash
npm install @genform/core
```

Then, you can use it in your project :

```js
// Import GenForm from the package
import genform from '@genform/core'

// Assuming you have a JSON object defining your form
const formData = {
  elems: [
    {
      type: 'text',
      name: 'username',
      placeholder: 'Enter your username',
      required: true
    }
    // Add more form elements as needed
  ],
  params: {
    action: '/submit',
    method: 'POST'
  },
  features: {}
}

// Retrieve the container element where you want to render the form
const formContainer = document.getElementById('genform')

// Create the form using GenForm
const form = genform.toForm(document, formData)

// Append the form to the container
formContainer.appendChild(form)
```

The json is composed of 2 parts :

- `elems` : The form elements, you can have your inputs, buttons, etc.
- `params` : The form parameters, you can have the action, method, etc.

## Want to contribute ?

If you want to contribute to the project, you can check the [GitHub](https://github.com/GenForm/GenForm) repository.

## License

This project is under the [MIT](https://github.com/GenForm/GenForm/blob/main/LICENSE) license.

## Web interface

To generate automatically a form, you can use the [web interface](https://genform.github.io/).
