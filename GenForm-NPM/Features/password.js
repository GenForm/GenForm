function validatePassword(form, json) {
  const passwordField = json.elems.find((elem) => elem.type === 'password')
  const passwordInput = form.querySelector('input[type="password"]')
  const passwordRegex = new RegExp(passwordField.pattern)

  if (!passwordInput) {
    throw new Error('password field or input or regex not found')
  }
  switch (true) {
    case passwordField.autocomplete === true:
      passwordInput.setAttribute('autocomplete', passwordField.autocomplete)

    case passwordField.minLength:
      passwordInput.setAttribute('minlength', passwordField.minLength)

    case passwordField.maxLength:
      passwordInput.setAttribute('maxlength', passwordField.maxLength)

    case passwordField.pattern:
      passwordInput.setAttribute('pattern', passwordField.pattern)
  }

  passwordInput.addEventListener('input', function () {
    const passwordValue = this.value

    switch (true) {
      case passwordField.minLength &&
        passwordValue.length < passwordField.minLength:
        throw new Error(
          'password must contain at least ' +
            passwordField.minLength +
            ' characters'
        )
      case passwordField.maxLength &&
        passwordValue.length > passwordField.maxLength:
        throw new Error(
          'password must contain at most ' +
            passwordField.maxLength +
            ' characters'
        )
      case passwordField.pattern && !passwordRegex.test(passwordValue):
        throw new Error(
          'password must match the pattern ' + passwordField.pattern
        )
    }
  })
}

function verifyPassword(form, json) {
  const passwordField = json.elems.find((elem) => elem.name === 'password')
  const confirmPasswordField = json.elems.find(
    (elem) => elem.name === 'confirmpassword'
  )
  const passwordInput = form.querySelector(
    'input[name="' + passwordField.name + '"]'
  )
  const confirmPasswordInput = form.querySelector(
    'input[name="' + confirmPasswordField.name + '"]'
  )

  if (
    !passwordField ||
    !confirmPasswordField ||
    !passwordInput ||
    !confirmPasswordInput
  ) {
    throw new Error('password field or input not found')
  }

  form.addEventListener('input', function () {
    if (passwordInput.value && confirmPasswordInput.value) {
      if (passwordInput.value !== confirmPasswordInput.value) {
        throw new Error("passwords don't match")
      } else {
        console.log('passwords match')
      }
    }
  })
}
