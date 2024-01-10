function verifyEqualInputs(form, json) {
  const verifyPairs = json.features.verifyInputsEquals
  const defaultMessage = "Inputs don't match"

  for (const pair of verifyPairs) {
    const key = Object.keys(pair).find((key) => {
      return key !== 'message' && key !== 'position'
    })
    const value = pair[key]

    const keyInput = form.querySelector('input[name="' + key + '"]')
    const valueInput = form.querySelector('input[name="' + value + '"]')

    if (!keyInput || !valueInput) {
      throw new Error('inputs not found')
    }

    const errorMessage = document.createElement('p')
    errorMessage.textContent = pair.message || defaultMessage
    errorMessage.style.display = 'none'
    errorMessage.style.color = 'red'

    switch (pair.position) {
      case 'nextTo':
        valueInput.parentNode.insertBefore(errorMessage, valueInput.nextSibling)
        handleFormNextToCase(form, errorMessage, keyInput, valueInput)
        break
      case 'none':
        break
      case 'popup':
        handlePopupCase(keyInput, valueInput, errorMessage.textContent)
        break
    }
  }
}

function handlePopupCase(keyInput, valueInput, errorMessage) {
  valueInput.addEventListener('input', function () {
    if (keyInput.value && valueInput.value) {
      if (keyInput.value !== valueInput.value) {
        valueInput.setCustomValidity(errorMessage)
      } else {
        valueInput.setCustomValidity('')
      }
    }
    valueInput.reportValidity()
  })
}

function handleFormNextToCase(form, errorMessage, keyInput, valueInput) {
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
