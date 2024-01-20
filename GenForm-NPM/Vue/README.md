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

It takes two elements when creating the component :

- elems : the elements of the form
- params : the parameters of the form

The first one `elements` is an array of objects. Each object represents an element of the form. For example :

```js
;[
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

## Want to contribute ?

If you want to contribute to the project, you can check the [GitHub](https://github.com/GenForm/GenForm) repository.

## License

This project is under the [MIT](https://github.com/GenForm/GenForm/blob/main/LICENSE) license.
