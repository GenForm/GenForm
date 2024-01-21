# GenForm

## Complete Package

Genform is a JavaScript library for creating web forms from JSON or JS. It's designed to be simple and flexible. You can create forms with just a few lines of code. It's also possible to create complex forms with lots of customization.

The Complete package consolidates additional functionality beyond form creation. It offers a complete solution for advanced customization and versatile use of GenForm.

## How to use it ?

First, you need to install the package :

```bash
npm install @genform/complete
```

Then, you can use it in your project :

```js
// Import GenForm from the package
import genform from '@genform/complete'

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

## Want to contribute ?

If you want to contribute to the project, you can check the [GitHub](https://github.com/GenForm/GenForm) repository.

## License

This project is under the [MIT](https://github.com/GenForm/GenForm/blob/main/LICENSE) license.
