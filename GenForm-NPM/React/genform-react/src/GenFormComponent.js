import React, { useEffect, useRef } from 'react';
import GenForm from '@genform/core';

function GenFormComponent({ elems, params }) {
  const formRef = useRef(null);

  useEffect(() => {
    const generatedForm = GenForm.toForm(document, {
      elems: elems,
      params: params
    });

    if (formRef.current) {
      formRef.current.appendChild(generatedForm);
    }
  }, [elems, params]);

  return (
    <div className="DynamicFormComponent">
      <header className="App-header">
        <div ref={formRef}></div>
      </header>
    </div>
  );
}

export default GenFormComponent;
