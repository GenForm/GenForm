function applyCapitalizeRulesOnFormInput(form, features) {
  const ruleMap = mapRulesToInputNames(features)

  for (const inputName in ruleMap) {
    const rule = ruleMap[inputName]
    const inputs = document.getElementsByName(inputName)

    if (inputs.length > 1) {
      throw new Error(`Multiple inputs with name '${inputName}'`)
    }

    const input = inputs[0]
    input.addEventListener('input', function () {
      input.value = applyRule(rule)(input.value)
    })
  }
}

function mapRulesToInputNames(features) {
  const capitalizeRules = features.capitalize
  checkDuplicateNamesInRules(capitalizeRules)

  const ruleMap = {}

  for (const rule in capitalizeRules) {
    capitalizeRules[rule].forEach((inputName) => {
      ruleMap[inputName] = rule
    })
  }

  return ruleMap
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

function applyRule(rule) {
  const capitalize = ['firstLetter', 'firstLetterOfEach', 'all', 'lowercase']

  if (rule === capitalize[0]) {
    return function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
  if (rule === capitalize[1]) {
    return function (string) {
      return capitalizeFirstLetter(string)
    }
  }
  if (rule === capitalize[2]) {
    return function (string) {
      return string.toUpperCase()
    }
  } else {
    return function (string) {
      return String(string).toLowerCase()
    }
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
