import React, { useState } from 'react'

const Inputs = ( {id, name, value} ) => {
  const [inputName, setInputName] = useState(name);
  const [inputValue, setInputValue] = useState(value);
    return (
        <div>
            <input type="text" defaultValue={inputName} onChange={e => setInputName(e)}></input>
            <input type="text" defaultValue={inputValue} name={inputValue}
                   onChange={e => setInputValue(e)}/>
        </div>
    )
}

export default Inputs;