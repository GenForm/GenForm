function verifyEqualInputs(form, json) {
  const verifyPairs = json.features.verifyInputsEquals;

  for (const pair of verifyPairs) {
    const key = Object.keys(pair)[0]
    const value = pair[key]

    const keyInput = form.querySelector('input[name="' + key + '"]')
    const valueInput = form.querySelector('input[name="' + value + '"]')

    if (!keyInput || !valueInput) {
      throw new Error('inputs not found')
    }

    const errorMessage = document.createElement('p')
    const message = document.createTextNode("inputs don't match")
    errorMessage.style.display = 'none'
    errorMessage.style.color = 'red'

    errorMessage.appendChild(message)
    form.appendChild(errorMessage)

    form.addEventListener('input', function () {
      if (keyInput.value && valueInput.value) {
        if (keyInput.value !== valueInput.value) {
          errorMessage.style.display = 'block'
          throw new Error("inputs don't match")
        } else {
          errorMessage.style.display = 'none'
        }
      }
    })
  }
}