import * as GenFormCore from '@GenForm/Core'

class GenForm {
  constructor() {}
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
