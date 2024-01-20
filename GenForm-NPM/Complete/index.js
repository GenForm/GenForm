import * as GenFormCore from '@genform/core'
import path from 'path'

// Features imports
import autoCapitalize from './lib/autoCapitalize.js'
import verifyEqualInputs from './lib/verifyEqualInputs.js'
import switchField from './lib/switchField.js'

class GenForm {
  constructor() {}
}

GenForm.toForm = function (document, obj) {
  const features = obj.features || {}
  const form = GenFormCore.default.toForm(document, obj)
  if (Object.keys(features).includes('capitalize')) {
    autoCapitalize(form, features.capitalize)
  }

  if (Object.keys(features).includes('checkEqualityInputs')) {
    verifyEqualInputs(form, features.checkEqualityInputs)
  }

  if (Object.keys(features).includes('autoSwitch')) {
    switchField(form, features.autoSwitch)
  }

  return form
}

GenForm.toFormWithFile = function (document, pathToFile) {
  return import(path.resolve(__dirname, pathToFile)).then((file) => {
    return GenForm.toForm(document, file)
  })
}

export default GenForm
