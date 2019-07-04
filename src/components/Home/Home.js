import React from 'react';

import DogPen from '../DogPen /DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import Walks from '../Walks/Walks';

import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';

import './Home.scss';


class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
  }

  readDogs = () => {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('could not get dogs', err));
  }

  readEmployees = () => {
    employeesData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('could not get employees', err));
  }

  readWalks = () => {

  }

  componentDidMount() {
    this.readDogs();
    this.readEmployees();
  }

  render() {
    const { dogs, employees } = this.state;
    return (
    <div className="Home">
      <div className = "row">
        <div className = "col">
      <DogPen dogs = {dogs} />
      </div>
      <div className = "col">
      <StaffRoom employees = {employees}/>
      </div>
      </div>
      <div className = "row">
      <div className = "col">
      <Walks />
      </div>
      </div>
    </div>
    );
  }
}

export default Home;
