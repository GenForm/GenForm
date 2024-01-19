import './App.css';
import { useState } from 'react';

function App() {
  const [selectedInput, setSelectedInput] = useState('name');
  const [cssString, setCssString] = useState('');

  const applyStyle = () => {
    const inputElements = document.getElementsByName(selectedInput);

    for (let i = 0; i < inputElements.length; i++) {
      const element = inputElements[i];
      element.style.cssText = cssString;

    }
  };

  return (
    <div className="App">
      <br />
      <div id="applyStyle">
        <div id="container_label">
          <label>Select the input </label>
          <select value={selectedInput} onChange={(e) => setSelectedInput(e.target.value)}>
            <option value="name">Name</option>
            <option value="pseudonym">Pseudonym</option>
          </select>
        </div>

        <br />
        <textarea
          placeholder='enter your css here'
          rows={20}
          cols={30}
          onChange={(elem) => setCssString(elem.target.value)}
        />
        <br />
        <br />


        <button onClick={applyStyle}>Apply style</button>
        <br />
        <br />
      </div>
      {/*TODO : delete after test*/}
      <div id='div-input'>
        <input type="text" name="name" placeholder="Nom" />
        <br />
        <input type="text" name="pseudonym" placeholder="Pseudonym" />
      </div>


    </div>
  );
}

export default App;
