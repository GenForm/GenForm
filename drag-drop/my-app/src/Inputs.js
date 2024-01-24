import React, { useEffect, useState } from 'react'

const Inputs = ({ id, name, value, modifyJson }) => {
  const [inputName, setInputName] = useState(name);
  const [inputValue, setInputValue] = useState(value);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    checkReservedInput();
  }, [])
  useEffect(() => {
    const transferJson = '\t\t\t' + inputName + ': ' + inputValue + '\n';
    console.log("transfer" + transferJson);
    modifyJson(id, transferJson);
  }, [inputName, inputValue])
  const checkReservedInput = () => {
    if (inputName === "type" || inputName === "name") {
      setIsDisabled(true);
    }
  }

  return (
    <div>
      <input type="text" defaultValue={inputName} onChange={e => setInputName(e)} disabled={isDisabled}></input>
      <input type="text" defaultValue={inputValue} name={inputValue}
        onChange={e => setInputValue(e)} />
    </div>
  )
}

export default Inputs;