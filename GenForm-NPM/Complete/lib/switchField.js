// Function to check functionality with additional properties (autoSwitch)
export default function switchField(form, autoSwitchFeature) {
  autoSwitchFeature.forEach((feature) => {
    const inputElement = form.querySelector(`[name="${feature.inputName}"]`)

    if (inputElement) {
      // Add an input event listener to check pattern validity
      inputElement.addEventListener(
        'input',
        checkPatternValidity(feature.maxChars, () => {
          return moveToNextInput(inputElement)
        })
      )
    }
  })
}

// Function to check pattern validity
function checkPatternValidity(maxChars, onValid) {
  return function (event) {
    const inputElement = event.target
    const currentPattern = new RegExp(inputElement.pattern)

    const userInput = inputElement.value

    // If the current length reaches the specified limit (maxChars)
    if (userInput.length >= maxChars) {
      // If a pattern is specified and matches the user input
      if (currentPattern && currentPattern.test(userInput)) {
        // Call the onValid callback when validation succeeds
        onValid()
      }

      // Truncate input value if it exceeds maxChars
      inputElement.value = inputElement.value.slice(0, maxChars)
    }
  }
}

// Function to move to the next field
function moveToNextInput(currentInputElement) {
  // Retrieve the following element from the the form
  const nextInput = currentInputElement.nextElementSibling

  // If the next element exists, focus on it
  if (nextInput) nextInput.focus()
}
