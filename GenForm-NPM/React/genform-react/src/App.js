import React, { Component } from 'react';
import './App.css';
import GenForm from '@genform/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tt: null,
    };
    this.formRef = React.createRef();
  }

  componentDidMount() {
    this.generateForm();
  }

  componentDidUpdate() {
    this.generateForm();
  }

  generateForm = () => {
    const { tt } = this.state;
    if (!tt) {
      const generatedForm = GenForm.toForm(document, {
        elems: [
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
        ],
        params: {
          action: '/register',
          method: 'POST',
        },
      });

      this.formRef.current.appendChild(generatedForm);
      this.setState({ tt: generatedForm });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div ref={this.formRef}></div>
        </header>
      </div>
    );
  }
}

export default App;
