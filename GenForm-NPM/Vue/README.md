# Genform

## Vue Package

Genform is a JavaScript library for creating web forms from JSON or JS. It's designed to be simple and flexible. You can create forms with just a few lines of code. It's also possible to create complex forms with lots of customization.

The Vue package allows you to use genform in your Vue project as a vue component. This is package for Vue.

## Dependencies

- [Vue](https://www.npmjs.com/package/vue) - Vue library
- [GenForm - Core](https://www.npmjs.com/package/@genform/core) - Core library

## How to use it ?

First, you need to install the package :

```bash
npm install @genform/vue
```

It takes three elements when creating the component :

- elems : the elements of the form
- params : the parameters of the form
- features : the features of the form

The first one `elements` is an array of objects. Each object represents an element of the form. For example :

```js
[
  {
    type: 'text',
    name: 'firstname',
    placeholder: 'Firstname'
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email'
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password'
  },
  {
    type: 'submit',
    value: 'Register'
  }
]
```

The second one `params` is an object that contains the parameters of the form. For example :

```js
{
  action: '/register',
  method: 'POST'
}
```

Then, you can use it in your project :

```js
// Define the elements of the form
const formElements = [
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
]
```

```js
// Define the parameters of the form
const formParams = {
  action: '/login',
  method: 'POST'
}
```

```js
// Define additional features for the form (optional)
const formFeatures = {
  // Add any additional features here
}
```

```js
// Integrate GenForm into your Vue project, providing form elements, parameters and optional functionality as prop
<GenFormComponent
  elems={formElements}
  params={formParams}
  features={formFeatures}
/>
```

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

To generate automatically a form, you can use the [web interface](https://genform.github.io/).
