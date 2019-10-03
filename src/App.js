import React from 'react';
import Header from './Components/Header';
import CommandModule from './Containers/CommandModule';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CommandModule />
    </div>
  );
}

export default App;
