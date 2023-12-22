import './App.css';
import GenForm from '@genform/react';

function App() {
    const customElems = [
        {
          type: 'text',
          name: 'name',
          placeholder: 'Name',
        },
        {
          type: 'email',
          name: 'email',
          placeholder: 'Email',
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
        },
        {
          type: 'submit',
          value: 'Submit',
        },
      ]

  const customParams = {
        action: '/register',
        method: 'POST',
      }
  return (
    <div className="App">
      <header className="App-header">
        <GenForm elems={customElems} params={customParams}/>
      </header>
    </div>
  );
}

export default App;
