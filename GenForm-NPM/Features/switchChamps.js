// Function to check pattern validity
export function checkPatternValidity(elem, onValid) {
  return function (event) {
    const inputElement = event.target
    const currentPattern = new RegExp(inputElement.pattern)

    const userInput = inputElement.value
    const currentLength = userInput.length

    // If the current length reaches the specified limit (maxChars)
    if (currentLength >= elem.maxChars) {
      // If a pattern is specified and not matched
      if (currentPattern && !currentPattern.test(userInput)) {
        console.error(
          `Pattern not matched in ${elem.name}. Entered value: ${userInput}. Expected pattern: ${currentPattern}`
        )
      } else {
        // Call the onValid callback when validation succeeds
        onValid()
      }

      // Truncate input value if it exceeds maxChars
      inputElement.value = inputElement.value.slice(0, elem.maxChars)
    }
  }
}

// Function to check functionality with additional properties (autoSwitch)
export function checkFeatures(form, autoSwitchFeatures) {
  autoSwitchFeatures.forEach((feature) => {
    const inputName = feature.inputName
    const inputElement = form.querySelector(`[name="${inputName}"]`)

    if (inputElement) {
      const featureWithPattern = {
        ...feature,
        pattern: feature.pattern ? new RegExp(feature.pattern) : null
      }

      // Add an input event listener to check pattern validity
      inputElement.addEventListener(
        'input',
        checkPatternValidity(featureWithPattern, () => {
          return moveToNextInput(inputElement)
        })
      )
    }
  })
}

// Function to move to the next field
export function moveToNextInput(currentInputElement) {
  // Retrieve the following element from the the form
  const nextInput = currentInputElement.nextElementSibling

  // If the next element exists, focus on it
  if (nextInput) nextInput.focus()
}
