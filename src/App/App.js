import React from 'react';
import logo from './logo.svg';

import dogs from './dogs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.setState({ dogs });
  }
  return (
    <div className="App">
      <div>Doggie Daycare</div>
    </div>
  );
}

export default App;
