import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Inputs from './Inputs';

const Selector = ({ key, name, type, placeholder, addValue }) => {
  const [id, setId] = useState(0)
  const [inputs, setInputs] = useState([])
  const [jsons, setJsons] = useState([])
  useEffect(() => {
    console.log("useEffect")
    hasType()
    hasPlaceholder()
  }, [])
  function handleAdd() {
    console.log("added")
    setJsons(prevList => [...prevList, '']);
  }
  const hasType = () => {
    console.log("key", key)
    if(type === true) {
      if(name !== 'Custom') {
        setJsons(prevList => [...prevList, '']);
        setInputs((prevInputs) => [...prevInputs, <Inputs key={key+" "+id} id={id} name={"type"} value={"input"} modifyJson={modifyJson}/>] )
        setId((prevId) => {
          return prevId + 1
        })
        handleAdd()
      }
    }
  }
  const hasPlaceholder = () => {
    if(placeholder === true) {
      setJsons(prevList => [...prevList, '']);
      setInputs((prevInputs) => [...prevInputs, <Inputs key={key+" "+id} id={id} name={"placeholder"} value={"default"} modifyJson={modifyJson}/>] )
      setId((prevId) => {
        return prevId + 1
      })
      handleAdd()
    }
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
    if(times > 0) {
      addValue(json)
    }
  }
  const showInputs = () => {
    return inputs.map((input) => {
      return input
    })
  }
  const addInput = () => {
    setInputs((prevInputs) => [...prevInputs, <Inputs key={key+" "+id} id={id} name={"à saisir"} value={"à saisir"} modifyJson={modifyJson}/>] )
    setId((prevId) => {
      return prevId + 1
    })
    handleAdd()
  }

  return (
    <div key={name}>
      <Popup trigger={<button className="button"> {name} </button>} modal>
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