# Genform for Vue

Genform is a JavaScript library for creating forms. It is designed to be simple and flexible. You can create forms with a few lines of code. It is also possible to create complex forms with a lot of customization.

GenForm for Vue allows you to use GenForm in your Vue project as a Vue component.

This is package for Vue.

## Dependencies
- Vue - Vue library
- GenForm Core - Core library

## How to use it 

It takes two elements when creating the component :
- elems : the elements of the form
- params : the parameters of the form

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