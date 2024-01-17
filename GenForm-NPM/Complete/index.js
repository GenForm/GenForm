import * as GenFormCore from '@genform/core'
import * as GenFormCore from '@genform/core'
// Features imports
import autoCapitalize from './lib/autoCapitalize.js'
import verifyEqualInputs from './lib/generics.js'

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

  return form
}

export default GenForm
