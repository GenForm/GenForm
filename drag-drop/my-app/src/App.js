import React, { useState } from 'react';
import './App.css';

const FormElement = ({ id, name, onClick }) => (
  <div key={id} onClick={() => onClick(id)} style={{ cursor: 'pointer', margin: '5px' }}>
    {name}
  </div>
);

function App() {
  const [formElems, setFormElems] = useState([]);
  const [formParams, setFormParams] = useState([]);
  const availableElements = [
    { id: 1, name: 'Input' },
    { id: 2, name: 'Textarea' },
    { id: 3, name: 'Checkbox' },
    { id: 4, name: 'Radio' },
    { id: 5, name: 'Select' },
    { id: 6, name: 'Button'}
  ];

  const addElementToForm = (elementId) => {
    const selectedElement = availableElements.find((element) => element.id === elementId);
    setFormElems([...formElems, { type: selectedElement.name.toLowerCase(), name: selectedElement.name,
      placeholder: selectedElement.name }]);
  };

  const convertElementToString = (elements) => {
    if(elements.length === 0) return;
    let str = `{\n
    \t"elems": [\n`;
    for(let element of elements) {
      str += "\t\t{\n";
      str += "\t\ttype: " + element.type + ",\n";
      str += "\t\tname: " + element.name + ",\n";
      str += "\t\tplaceholder: " + element.placeholder + "\n";
      str += "\t},\n";
    }
    str = str.slice(0, -2);
    str += "\n\t],\n";
    return str;
  }

  const convertParamsToString = (params) => {
    if(formElems.length === 0) return;
    let str = `\t"params": {\n
    \t\t"action": "/login"\n,
    \t\t"method": "POST"\n
    \t}\n
    }\n`
    return str;
  }

  return (
    <div className="App" style={{ display: 'flex' }}>
      <h1 className="title">Gen Form</h1>
      <div style={{ flex: '1', border: '1px solid #ddd', padding: '10px' }}>
        <h2>Form Elements</h2>
        {availableElements.map((element) => (
          <FormElement key={element.id} {...element} onClick={addElementToForm} />
        ))}
      </div>

      <div style={{ flex: '2', border: '1px solid #ddd', padding: '10px' }}>
        <h2>Json Souhaité :</h2>
        <pre>{convertElementToString(formElems)}</pre>
        <pre>{convertParamsToString(formParams)}</pre>
      </div>
    </div>
  );
}

export default App;
