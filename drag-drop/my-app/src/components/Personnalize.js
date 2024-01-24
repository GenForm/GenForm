import './Personnalize.css';
import { useState } from 'react';

function Personnalize() {
  const [selectedInput, setSelectedInput] = useState('name');
  const [css, setCss] = useState({});

  const handleSelectChange = (elem) => {
    const inputName = elem.target.value;
    setSelectedInput(inputName);
  };

  const handleCssChange = (elem) => {
    const newCss = elem.target.value;
    setCss({...css,[selectedInput]: newCss });
  };

  const PersonnalizeStyle = () => {
    const inputElements = document.getElementsByName(selectedInput);
    for (let element of inputElements) {
      element.style.cssText = css[selectedInput];
    }
  };

  return (
    <div className="Personnalize">
      <br />
      <div id="PersonnalizeStyle">
        <div id="container_label">
          <label>Select the input </label>
          <select value={selectedInput} onChange={handleSelectChange}>
            <option value="name">Name</option>
            <option value="pseudonym">Pseudonym</option>
          </select>
        </div>

        <br />
        <textarea
          placeholder='enter your css here'
          rows={20}
          cols={30}
          value={css[selectedInput]}
          onChange={handleCssChange}
        />
        <br />
        <br />

        <button onClick={PersonnalizeStyle}>Apply style</button>
        <br />
        <br />
      </div>
      <div id='div-input'>
        <input type="text" name="name" placeholder="Nom" />
        <br />
        <input type="text" name="pseudonym" placeholder="Pseudonym" />
      </div>

    </div>
  );
}

export default Personnalize;
