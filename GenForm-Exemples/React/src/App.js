import './App.css'
import GenFormComponent from '@genform/react'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [params, setParams] = useState('')
  const [features, setFeatures] = useState('')
  const [elems, setElems] = useState('')
  const [showForm, setShowForm] = useState(false)

  function changeForm() {
    const json = value
    const obj = JSON.parse(json)
    setParams(obj.params)
    setElems(obj.elems)
    setFeatures(obj.features)
    setShowForm(true)
  }

  function showFormComponent() {
    if (showForm) {
      return <GenFormComponent params={params} elems={elems} features={features} />
    } else {
      return <form></form>
    }
  }

  return (
    <div>
      <h1>POC GenForm</h1>
      <div id="main">
        <form id="input">
          <textarea
            id="changeform"
            name="changeform"
            placeholder="Enter a json format form parameters ..."
            onChange={(event) => setValue(event.target.value)}
          ></textarea>
          <input
            type="button"
            value="Submit"
            id="submit"
            onClick={() => changeForm()}
          />
        </form>
        <div id="vbar"></div>
        <div id="genform">{showFormComponent()}</div>
      </div>
    </div>
  )
}

export default App
