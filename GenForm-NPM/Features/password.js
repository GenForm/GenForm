function applyPasswordRules(features) {
  const passwordRules = features.password
  const passwordInput = document.querySelector('input[type="password"]')

  passwordInput.addEventListener('input', function () {
    const password = this.value

    switch (true) {
      case password.length < passwordRules.minChar:
        throw new Error(
          `the password must contain at least ${passwordRules.minChar} character(s).`
        )
      case passwordRules.specialchar &&
        !/[!@#$%^&*(),.?":{}|<>]/.test(password):
        throw new Error(
          `the password must contain at least one special character.`
        )
      case passwordRules.minUppercase &&
        password.replace(/[^A-Z]/g, '').length < passwordRules.minUppercase:
        throw new Error(
          `the password must contain at least ${passwordRules.minUppercase} uppercase letter(s).`
        )
      default:
        console.log('password valid format')
    }
  })
}

function verifyPassword() {
  const passwordInput = document.querySelector('input[name="password"]')
  const confirmPasswordInput = document.querySelector(
    'input[name="confirmpassword"]'
  )

  function checkPasswords() {
    if (passwordInput.value !== confirmPasswordInput.value) {
      console.error('passwords do not match')
    } else {
      console.log('passwords match')
    }
  }

  passwordInput.addEventListener('input', checkPasswords)
  confirmPasswordInput.addEventListener('input', checkPasswords)
}
