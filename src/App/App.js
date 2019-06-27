import React from 'react';

import myDogs from './dogs';
import DogPen from '../components/DogPen /DogPen';

import myEmployees from './employees';
import StaffRoom from '../components/StaffRoom/StaffRoom';
import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
   state = {
     dogs: [],
     employees: [],
   }

   componentDidMount() {
     this.setState({ dogs: myDogs });
     this.setState({ employees: myEmployees });
   }

   render() {
     return (
    <div className = "App">
      <div>Doggie Daycare</div>
      <Auth />
      <Home />
      <DogPen dogs = {myDogs} />
      <StaffRoom employees = {myEmployees} />
    </div>
     );
   }
}

export default App;
