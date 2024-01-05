function validateEmailInput(form) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const emailInput = form.querySelector('input[type="email"]')

  emailInput.addEventListener('input', function () {
    if (this.value.includes('@') && this.value.includes('.')) {
      if (!emailRegex.test(this.value)) {
        throw new Error('invalid email')
      }
    }
  })
}
