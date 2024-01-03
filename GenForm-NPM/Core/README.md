# GenForm | Core Package

Genform is a JavaScript library for creating forms. It is designed to be simple and flexible. You can create forms with a few lines of code. It is also possible to create complex forms with a lot of customization.

The core package is the core of the library. It contains the main functions of the library and nothing else.

If you want to use genform in your project, you can use the package for the framework you are using. It exists for React and Vue. If you are not using a framework, you can use the core package.

If you want more fonctionnalities, you can check the other packages of genform.

## How to use it ?

First, you need to install the package :

```bash
npm install @genform/core
```

Then, you can use it in your project :

```js
import GenForm from '@genform/core'

// You need an array of objects that represents the elements of the form
const elems = [
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

// You need an object that contains the general parameters of the form
const params = {
  action: '/login',
  method: 'POST'
}

// And finally, you can create the form
const yourForm = new GenForm(elems, params)
Document.getElementById('yourFormDiv').innerHTML = yourForm
```

## Want to contribute ?

If you want to contribute to the project, you can check the [GitHub](https://github.com/GenForm/GenForm) repository.

## License

This project is under the [MIT](https://github.com/GenForm/GenForm/blob/main/LICENSE) license.
