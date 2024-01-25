import React, { useEffect, useRef } from 'react'
import GenForm from '@genform/complete'

function GenFormComponent({ elems, params, features, file }) {
  const formRef = useRef(null)

  useEffect(() => {
    const generatedForm = GenForm.toForm(
      document,
      file !== undefined
        ? file
        : {
          elems: elems,
          params: params,
          features: features
        }
    )

    if (formRef.current) {
      formRef.current.innerHTML = ''
      formRef.current.appendChild(generatedForm)
    }
  }, [elems, params, features, file])

  return React.createElement('div', { ref: formRef })
}

export default GenFormComponent
