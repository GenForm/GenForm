export default function autoCapitalize(form, capitalRules) {
  const ruleMap = mapRulesToInputNames(capitalRules)

  for (const inputName in ruleMap) {
    const rule = ruleMap[inputName]
    const input = form.querySelector('input[name="' + inputName + '"]')

    if (input) {
      input.addEventListener('input', function () {
        const capitalizeFunction = applyRule(rule)
        this.value = capitalizeFunction(this.value)
      })
    }
  }
}

function mapRulesToInputNames(capitalRules) {
  const ruleMap = {}

  for (const rule in capitalRules) {
    capitalRules[rule].forEach((inputName) => {
      ruleMap[inputName] = rule
    })
  }

  return ruleMap
}

function applyRule(rule) {

  switch (rule) {
    case 'firstLetter':
      return function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    case 'firstLetterOfEach':
      return function (string) {
        return capitalizeFirstLetter(string)
      }
    case 'allUppercase':
      return function (string) {
        return string.toUpperCase()
      }
    case 'allLowercase':
      return function (string) {
        return string.toLowerCase()
      }
    default:
      return function (string) {
        return string
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
