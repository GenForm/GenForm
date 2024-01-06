function validateEmailInput(form, json) {
  const emailField = json.elems.find((elem) => elem.type === 'email')
  const emailInput = form.querySelector('input[type="email"]')
  const emailRegex = new RegExp(emailField.pattern)

  if (!emailField || !emailInput || !emailRegex) {
    throw new Error('email field or input or regex not found')
  }

  emailInput.addEventListener('input', function () {
    if (!emailRegex.test(this.value)) {
      throw new Error('Invalid email')
    } else {
      console.log('email valid format')
    }
  })
}
