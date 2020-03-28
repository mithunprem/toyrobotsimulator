import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import CommandModule from './containers/commandModule';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <CommandModule />
      </div>
    </Provider>
  );
}

export default App;
