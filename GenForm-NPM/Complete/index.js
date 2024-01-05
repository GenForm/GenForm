import * as GenFormCore from '@genform/core'

// Features imports
import autoCapitalize from './lib/autoCapitalize.js'

class GenForm {
  constructor() { }
}

GenForm.toForm = function (document, obj) {
  const features = obj.features || {}
  const form = GenFormCore.default.toForm(document, obj)
  if (Object.keys(features).includes('capitalize')) {
    autoCapitalize(form, features.capitalize)
  }

  return form
}

export default GenForm
