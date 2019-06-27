import React from 'react';

import DogPen from '../DogPen /DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import myEmployees from '../../App/employees';
import myDogs from '../../App/dogs';

import './Home.scss';

class Home extends React.Component {
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
      <div className = "Home">
        <h1>Home</h1>
        <DogPen dogs = {myDogs} />
        <StaffRoom employees = {myEmployees} />
      </div>
    );
  }
}

export default Home;
