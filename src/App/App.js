import React from 'react';

import myDogs from './dogs';
import DogPen from '../components/DogPen /DogPen';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
   state = {
     dogs: [],
   }

   componentDidMount() {
     this.setState({ dogs: myDogs });
   }

   render() {
     return (
    <div className = "App">
      <div>Doggie Daycare</div>
      <DogPen dogs = {myDogs} />
    </div>
     );
   }
}

export default App;
