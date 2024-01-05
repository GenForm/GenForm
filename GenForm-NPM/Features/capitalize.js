function applyCapitalizeRulesOnFormInput(features) {
  const ruleMap = mapRulesToInputNames(features)

  for (const inputName in ruleMap) {
    const rule = ruleMap[inputName]
    const input = document.getElementsByName(inputName)[0]

    if (input) {
      input.addEventListener('input', function () {
        const capitalizeFunction = applyRule(rule)
        this.value = capitalizeFunction(this.value)
      })
    }
  }
}

function mapRulesToInputNames(features) {
  const capitalizeRules = features.capitalize
  const ruleMap = {}

  for (const rule in capitalizeRules) {
    capitalizeRules[rule].forEach((inputName) => {
      ruleMap[inputName] = rule
    })
  }

  return ruleMap
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
      return string.toLowerCase()
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
