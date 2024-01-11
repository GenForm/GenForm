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
    }
  }

  return (
    <div>
      <head>
        <link rel="stylesheet" type="text/css" href="index.css" />
      </head>
      <body>
        <h1>POC GenForm</h1>
        <div id="main">
          <form id="input">
            <textarea
              rows="30"
              cols="68"
              id="changeform"
              name="changeform"
              placeholder="Enter a json format form parameters ..."
              onChange={(event) => setValue(event.target.value)}
            ></textarea>
            <br />
            <input
              type="button"
              value="Submit"
              id="submit"
              onClick={() => changeForm()}
            />
          </form>
          <div id="vbar"></div>
          <div id="genform">
            <form></form>
          </div>
        </div>
        <script type="module" src="./index.js"></script>
      </body>
      {showFormComponent()}
    </div>
  )
}

export default App
