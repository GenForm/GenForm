import './App.css'
import GenFormComponent from '@genform/react'

function App() {
    const customElems = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Name'
        },
        {
            type: 'email',
            name: 'email',
            placeholder: 'Email'
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Password'
        },
        {
            type: 'submit',
            value: 'Submit'
        },
        {
            type: 'reset',
            value: 'Reset'
        }
    ]

    const customParams = {
        action: '/register',
        method: 'POST'
    }
    return (
        <div className="App">
            <main className="App-main">
                <GenFormComponent elems={customElems} params={customParams} />
            </main>
        </div>
    )
}

export default App
