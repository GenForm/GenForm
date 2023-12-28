import React, { useEffect, useRef } from 'react'
import GenForm from '@genform/core'

function GenFormComponent({ elems, params }) {
    const formRef = useRef(null)

    useEffect(() => {
        const generatedForm = GenForm.toForm(document, {
            elems: elems,
            params: params
        })

        if (formRef.current) {
            formRef.current.innerHTML = ''
            formRef.current.appendChild(generatedForm)
        }
    }, [elems, params])

    return React.createElement('div', { ref: formRef })
}

export default GenFormComponent
