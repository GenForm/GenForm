import React from "react";

const Style = () => {
    const [selectedInput, setSelectedInput] = useState('name');

    //const checkSelectedInput = 
    return (
        <div className="App">
        <div>
        <select value={selectedInput} onChange={(elem) => setSelectedInput(elem.target.value)}>
            <option value="name">Name</option>
            <option value="pseudonym">Pseudonym</option>
          </select>
  
          <h1>La Zone</h1>
          <textarea
          placeholder='enter your css here'
          rows={20}
          cols={20}/>
        </div>
  
        <div>
          <input type="text"
           name="name"
           placeholder="Nom"
          />
          <br/>
           <input type="text"
           name="pseudonym"
           placeholder="pseudonym"
          />
        </div>
      </div>
    );
}

export default Style;
