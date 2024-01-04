function applyCapitalizeRulesOnFormInput(form, features) {
  const capitalizeRules = features.capitalize
  checkDuplicateNamesInRules(capitalizeRules)

  const inputs = form.getElementsByTagName('input')

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]
    let capitalizeRule = null

    for (const rule in capitalizeRules) {
      if (capitalizeRules[rule].includes(input.name)) {
        capitalizeRule = rule
      }
    }

    if (capitalizeRule) {
      input.addEventListener('input', function () {
        input.value = applyTextCapitalize(input.value, capitalizeRule)
      })
    }
  }
}

function checkDuplicateNamesInRules(capitalizeRules) {
  const tempName = {}

  for (const rule in capitalizeRules) {
    capitalizeRules[rule].forEach((name) => {
      if (tempName[name]) {
        throw new Error(` '${name}' is present in multiple rules`)
      }
      tempName[name] = rule
    })
  }
}

function applyTextCapitalize(string, rule) {
  const capitalize = ['firstLetter', 'firstLetterOfEach', 'all', 'none']

  if (rule === capitalize[0]) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  if (rule === capitalize[1]) {
    return capitalizeFirstLetter(string)
  }
  if (rule === capitalize[2]) {
    return string.toUpperCase()
  } else {
    return string
  }
}

function capitalizeFirstLetter(string) {
  const breakpoints = /(\s|-|,)/
  return string
    .split(breakpoints)
    .map((s) => {
      if (breakpoints.test(s)) {
        return s
      }
      return s.charAt(0).toUpperCase() + s.slice(1)
    })
    .join('')
}

function attributeToCapitalize(string, rule) {
  const capitalize = ['firstLetter', 'firstLetterOfEach', 'all', 'none']

  if (rule === capitalize[0]) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  if (rule === capitalize[1]) {
    return capitalizeFirstLetter(string)
  }
  if (rule === capitalize[2]) {
    return string.toUpperCase()
  } else {
    return string
  }
}
