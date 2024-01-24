import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Inputs from './Inputs';

const Selector = ({ elementTypeKey, typeName, addValue }) => {
  const [id, setId] = useState(0)
  const [inputs, setInputs] = useState([])
  const [jsons, setJsons] = useState([])
  useEffect(() => {
    handleAdd()
  }, [inputs])
  useEffect(() => {
    // Called once
    addTypeInput()
    addNameInput()
  }, [])
  useEffect(() => {
    console.log("Last Elem id", id) // TODO: To update Id on each update, replace console.log by something more useful
  }, [id])
  function handleAdd() {
    console.log("added")
    setJsons(prevList => [...prevList, '']);
  }
  const addTypeInput = () => {
    setJsons(prevList => [...prevList, '']);
    setInputs((prevInputs) => [...prevInputs, <Inputs key={elementTypeKey + id} id={id} name={"type"} value={typeName} modifyJson={modifyJson} />])
    setId((prevId) => prevId + 1);
    handleAdd()
  }
  const addNameInput = () => {
    setJsons(prevList => [...prevList, '']);
    setInputs((prevInputs) => [...prevInputs, <Inputs key={elementTypeKey + id} id={id} name={"name"} value={""} modifyJson={modifyJson} />])
    setId((prevId) => prevId + 1);
    handleAdd()
  }
  const modifyJson = (id, json) => {
    console.log("modifyJson", id, json)
    console.log("jsons l", jsons.length)
    setJsons((prevJsons) => {
      prevJsons[id] = json
      return prevJsons
    })
    console.log("jsons", jsons)
  }
  const addingElementToForm = () => {
    const json = '\t\t{\n'
    let times = 0
    jsons.forEach(i => {
      json.concat(i)
      times++
    })
    json.concat('\t\t},\n')
    console.log("concat", json + times)
    if (times > 0) {
      addValue(json)
    }
  }
  const showInputs = () => {
    return inputs.map((input) => {
      return input
    })
  }
  const addInput = () => {
    setInputs((prevInputs) => [...prevInputs, <Inputs key={elementTypeKey + id} id={id} name={""} value={""} modifyJson={modifyJson} />])
    setId((prevId) => prevId + 1);
    console.log("Actual id", id)
    handleAdd()
  }

  return (
    <div key={typeName}>
      <Popup trigger={<button className="button"> {typeName} </button>} modal>
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Choisissez les paramètres </div>
            <div className="content">
            </div>
            <div>
              {showInputs()}
            </div>
            <div className="actions">
              <button onClick={() => addInput()}> Ajouter un champs</button>
              <button className="button" onClick={() => {
                close()
                addingElementToForm()
              }}>
                Valider
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Selector;