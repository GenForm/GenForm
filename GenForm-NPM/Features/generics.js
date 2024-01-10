function verifyEqualInputs(form, json) {
  const verifyPairs = json.features.verifyInputsEquals
  const defaultMessage = "Inputs don't match"

  for (const pair of verifyPairs) {
    const key = Object.keys(pair).find(
      (key) => key !== 'message' && key !== 'position'
    )
    const value = pair[key]

    const keyInput = form.querySelector('input[name="' + key + '"]')
    const valueInput = form.querySelector('input[name="' + value + '"]')

    if (!keyInput || !valueInput) {
      throw new Error('inputs not found')
    }

    const errorMessage = document.createElement('span')
    errorMessage.textContent = pair.message || defaultMessage
    errorMessage.style.display = 'none'
    errorMessage.style.color = 'red'
    errorMessage.style.marginLeft = '10px'

    switch (pair.position) {
      case 'nextTo':
        valueInput.parentNode.insertBefore(errorMessage, valueInput.nextSibling)
        break
      case 'none':
        return
      case 'popup':
        valueInput.setCustomValidity(errorMessage.textContent)
        valueInput.addEventListener('input', function () {
          if (keyInput.value && valueInput.value) {
            if (keyInput.value !== valueInput.value) {
              valueInput.setCustomValidity(errorMessage.textContent)
            } else {
              valueInput.setCustomValidity('')
            }
          }
        })
        break
    }

    form.addEventListener('input', function () {
      if (keyInput.value && valueInput.value) {
        if (keyInput.value !== valueInput.value) {
          errorMessage.style.display = 'inline'
        } else {
          errorMessage.style.display = 'none'
        }
      }
    })
  }
}
