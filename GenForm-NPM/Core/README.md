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

The json is composed of 3 parts :
- `elems` : The form elements, you can have your inputs, buttons, etc.
- `params` : The form parameters, you can have the action, method, etc.
- `features` : The form features, you can have the methods applied to your form such as caps lock or switch auto.

### List of Features

We have the following features implemented :
- capitalize
- checkEqualityInputs
- autoSwitch

For *capitalize* :
You can capitalize differents parameters :
- `firstLetter` : Capitalize the first letter of the input.
- `firstLetterOfEach` : which will capitalize the first letter of each word of the input. If your input is separated by a `-` or a `_`, 
it will capitalize the first letter of each word separated by a `-` or a `_`.
- `allUppercase` : which will capitalize all the letters of the input.
- `allLowercase` : which will lowercase all the letters of the input.

For each one of those methods, you have to then specify the name of your input that you want to capitalize.

This is an example of the different methods capitalize that you can use :
```json
"features": {
    "capitalize": {
      "firstLetter": ["username"],
      "firstLetterOfEach": ["name"],
      "allUppercase": ["surname"],
      "allLowercase": ["email"]
    }
}
```

For *checkEqualityInputs* :
You can check the equality of two inputs. You have to specify the type of the two inputs that you want to check the equality.
You can also specify the message which will appear if the two inputs are not equal and the position in which it will appear.

This is an example of the method checkEqualityInputs that you can use :
```json
"features": {
    "checkEqualityInputs": [
      {
        "password": "password_confirm",
        "message": "Passwords do not match",
        "position": "popup"
      }
    ]
}
```

For *autoSwitch* :
You can switch automatically between two inputs. You have to specify the name of the input that you want to switch automatically after its completion and the maximum characters that you allow.

This is an example of the method autoSwitch that you can use :
```json

"features": {
    "autoSwitch": [
      {
        "inputName": "username",
        "maxChars": 10
      }
    ]
}
```

## Want to contribute ?

If you want to contribute to the project, you can check the [GitHub](https://github.com/GenForm/GenForm) repository.

## License

This project is under the [MIT](https://github.com/GenForm/GenForm/blob/main/LICENSE) license.

## Web interface

To generate automatically a form, you can use the [web interface](https://genform.github.io/GenForm-Web/).

