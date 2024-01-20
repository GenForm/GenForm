import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Selector = ({ name, type, placeholder, addValue }) => {
  const [value, setValue] = useState({})

  const hasType = () => {
    if(type === true) {
      if(name !== 'Custom')
        setValue({type: name.toLowerCase()})
        return (
          <div>
            <label htmlFor={name}>{name}</label>
            <input type="text" placeholder={name} defaultValue={type}
                   onChange={(e) => {setValue({type: e})}}/>
          </div>
        )
    }
  }
  const hasPlaceholder = () => {
    if(placeholder === true) {
      setValue({placeholder: name.toLowerCase()})
      return (
        <div>
          <label htmlFor={name}>Placeholder</label>
          <input type={name.toLowerCase()} placeholder={name}
          onChange={e => {setValue({placeholder: e})}}/>
        </div>
      )
    }
  }
  const addingElementToForm = () => {
   addValue("OUI OUI")
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
              {hasType()}
              {hasPlaceholder()}
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