import * as GenFormCore from '@GenForm/Core'

class GenForm {
  constructor() { }
}

const autoCapitalize = (form, features) => {
  console.log('A PH until the feature is implemented')
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
