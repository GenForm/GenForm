import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Inputs from './Inputs';

const Selector = ({ name, type, placeholder, addValue }) => {
  const [id, setId] = useState(0)
  const [inputs, setInputs] = useState([])
  useEffect(() => {
    console.log("useEffect")
    hasType()
    hasPlaceholder()
  }, [])

  const hasType = () => {
    if(type === true) {
      if(name !== 'Custom') {
        setInputs((prevInputs) => [...prevInputs, <Inputs key={id} id={id} name={"type"} value={"input"}/>] )
        setId((prevId) => {
          return prevId + 1
        })
      }
    }
  }
  const hasPlaceholder = () => {
    if(placeholder === true) {
      setInputs((prevInputs) => [...prevInputs, <Inputs key={id} id={name + id} name={"placeholder"} value={"default"}/>] )
      setId((prevId) => {
        return prevId + 1
      })
    }
  }
  const addingElementToForm = () => {
   addValue("OUI OUI")
  }
  const showInputs = () => {
    return inputs.map((input) => {
      return input
    })
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
              <button className="button" onClick={() => {
                close();
                addingElementToForm();
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