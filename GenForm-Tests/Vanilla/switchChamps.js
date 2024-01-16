// JSON element processing without additional properties
function checkNoneFeatures(elem, autoSwitchFeatures, elems) {
  const notInAutoSwitch = autoSwitchFeatures.every((feature) => { return feature.inputName !== elem.name })

  if (notInAutoSwitch && elem.pattern) {
    // Retrieves the HTML element associated with the JSON element
    const inputElement = document.getElementsByName(elem.name)[0]
    
    if (!notInAutoSwitch) {
      // Adds an event listener to detect changes in the input
      inputElement.addEventListener('input', () => {
        // Creation of a regular expression based on the JSON element pattern
        // Necessary to check whether the value of an input field matches the pattern specified in the JSON element
        const currentPattern = new RegExp(elem.pattern)
        if (currentPattern.test(inputElement.value)) {
          moveToNextInput(elem.name, elems)
        }
      })
    }
  }
}

// Pattern validity check function
function checkPatternValidity(inputElement, pattern, maxChars, name, elems) {
  const adjustedPattern = pattern ? `^${pattern}$` : null
  const currentPattern = adjustedPattern ? new RegExp(pattern) : null

  inputElement.addEventListener('input', () => {
    const userInput = inputElement.value
    const currentLength = userInput.length

    // If current length reaches specified limit (maxChars)
    if (currentLength >= maxChars) {
      // If a pattern is specified
      if (currentPattern) {
        // Checks whether the current value of the input matches the pattern
        if (currentPattern.test(userInput)) {
          moveToNextInput(name, elems)
        } else {
          console.error(`Pattern not matched in ${name}. Entered value: ${userInput}. Expected pattern: ${currentPattern}`)
        }
      } else {
        moveToNextInput(name, elems)
      }
      
      // Add another event listener to manage modification after maximum length has been reached
      inputElement.addEventListener('input', () => {
        if (!inputElement.value.length < maxChars) {
          inputElement.value = inputElement.value.slice(0, maxChars)
        }
      })
    }
  })
}

// JSON element processing with additional properties
function checkFeatures(features, elems) {
  const autoSwitchFeatures = features.autoSwitch || []

  autoSwitchFeatures.forEach((feature) => {
    const inputName = feature.inputName    
    const foundElement = elems.find((elem) => {return elem.name === inputName })

    if (foundElement) {
      const maxChars = parseInt(feature.maxChars)
      foundElement.maxChars = maxChars
    
      // Checks for the presence of the word pattern in elems
      const patternElement = elems.find((elem) => { return elem.name === inputName && elem.pattern })

      if (patternElement) {   
        const inputElement = document.getElementsByName(foundElement.name)[0]
        checkPatternValidity(inputElement, patternElement.pattern, foundElement.maxChars, foundElement.name, elems)
        
      } else {
        const inputElement = document.getElementsByName(foundElement.name)[0]

        inputElement.addEventListener('input', () => {
          const currentLength = inputElement.value.length
          if (currentLength >= foundElement.maxChars) {
            moveToNextInput(foundElement.name, elems)
          }
        })
      }
    }
  })

  elems.forEach((elem) => {
    checkNoneFeatures(elem, autoSwitchFeatures, elems)
  })
}  

// Move to next field function
function moveToNextInput(currentInputName, elems) {
  // Retrieve the element from the elems array
  const currentInput = elems.find((elem) => { return elem.name === currentInputName })
  // Retrieve the following element from the elems array
  const nextInput = elems.find((elem, index) => { return index > elems.indexOf(currentInput) && elem.maxChars !== null })
  
  if (nextInput) {
    const nextInputName = nextInput.name
    const nextInputElement = document.getElementsByName(nextInputName)[0]

    // When the next element is found, moves the focus to that element
    if (nextInputElement) {
      nextInputElement.focus()
    }
  }
}

export default checkFeatures
