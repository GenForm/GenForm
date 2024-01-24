import React, { useEffect, useState } from 'react'
import './App.css';
import { FaCopy } from "react-icons/fa";
import Personalize from './components/Personnalize';
import Selector from './Selector'

const FormElement = ({ id, name, onClick }) => (
  <div key={id} onClick={() => onClick(id)} style={{ cursor: 'pointer', margin: '5px' }}>
    {name}
  </div>
);

function App() {
  const [selectedElement, setSelectedElement] = useState([])
  const [formElems, setFormElems] = useState([]);
  const [formParams, setFormParams] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const availableElements = [
    { id: 1, typeName: 'Input' },
    { id: 2, typeName: 'Text' },
    { id: 3, typeName: 'Checkbox' },
    { id: 4, typeName: 'Radio' },
    { id: 6, typeName: 'Textarea' },
    { id: 7, typeName: 'Custom' }
  ];

  useEffect(() => {
    console.log("once pls")
    getAllElements();
  }, [])

  const addElementToForm = (json) => {
    console.log("json", json)
    setFormElems(json);
  };

  const convertElementToString = () => {
    if (formElems.length === 0) return;
    let str = `{\n
    \t"elems": [\n`;
    for (let element of formElems) {
      str += element
    }
    str = str.slice(0, -2);
    str += "\n\t],\n";
    return str;
  }

  const convertParamsToString = (params) => {
    if (formElems.length === 0) return;
    return `\t"params": {\n
    \t\t"action": "/login"\n,
    \t\t"method": "POST"\n
    \t}\n
    }\n`;
  }

  const copyJson = () => {
    navigator.clipboard.writeText(convertElementToString(formElems) + convertParamsToString(formParams));
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000)
  }

  const afterCopied = () => {
    if (isCopied) {
      return "Copié!"
    } else {
      return ""
    }
  }
  const clearJson = () => {
    setFormElems([])
    setFormParams([])
  }
  const getAllElements = () => {
    availableElements.map((element) => (
      setSelectedElement((prevElem) => [...prevElem, <Selector elementTypeKey={element.id * 100} typeName={element.typeName} addValue={addElementToForm} />])
    ))
  }

  return (
    <div>
      <h1 className="title">Gen Form</h1>
      <div className="App" style={{ display: 'flex' }}>
        <div style={{ flex: '1', border: '1px solid #ddd', padding: '10px' }}>
          <h2>Form Elements</h2>
          {selectedElement.map((element, index) => (
            <div key={index}>
              {element}
            </div>
          ))}
        </div>

        <div style={{ flex: '2', border: '1px solid #ddd', padding: '10px' }}>
          <h2>Json Souhaité :</h2>
          <pre>{convertElementToString(formElems)}</pre>
          <pre>{convertParamsToString(formParams)}</pre>
          Copier le json <FaCopy style={{ cursor: 'pointer' }} onClick={() => {
            copyJson()
          }} />
          {afterCopied()}
          <div onClick={() => clearJson()} style={{ cursor: 'pointer' }}>Vider le Json</div>
          <div>Personnaliser</div>
        </div>
      </div>
      <Personalize formElements={formElems} />
    </div>
  );
}

export default App;
