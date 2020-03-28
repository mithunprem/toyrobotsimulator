import React from 'react';
import Header from './components/header';
import CommandModule from './containers/commandModule';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <CommandModule />
    </div>
  );
}

export default App;
