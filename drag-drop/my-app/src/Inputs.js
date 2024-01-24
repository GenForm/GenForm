import React, { useEffect, useState } from 'react'

const Inputs = ( {id, name, value, modifyJson} ) => {
  const [inputName, setInputName] = useState(name);
  const [inputValue, setInputValue] = useState(value);
  useEffect(() => {
    const transferJson = '\t\t\t' + inputName + ': ' + inputValue + '\n';
    console.log("transfer" + transferJson);
    modifyJson(id, transferJson);
  }, [inputName, inputValue])

    return (
        <div>
            <input type="text" defaultValue={inputName} onChange={e => setInputName(e)}></input>
            <input type="text" defaultValue={inputValue} name={inputValue}
                   onChange={e => setInputValue(e)}/>
        </div>
    )
}

export default Inputs;