import React from 'react';
import './App.css';

import useInput from './hooks/useInput';


function App() {
  const maxLengthValidator = value => value.length < 20;
  const name = useInput("Mr.", maxLengthValidator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
