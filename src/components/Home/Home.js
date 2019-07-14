import React from 'react';

import DogPen from '../DogPen /DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkForm from '../WalkForm/WalkForm';
import Walks from '../Walks/Walks';

import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';
import walksData from '../../helpers/data/walksData';

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
    walksData.getWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('could not get walks', err));
  }

  componentDidMount() {
    this.readDogs();
    this.readEmployees();
    this.readWalks();
  }

  deleteWalk = (walkId) => {
    walksData.deleteSingleWalk(walkId)
      .then(() => this.readWalks())
      .catch(err => console.error('did not delete walk', err));
  }

  addWalk = (walkObject) => {
    const dog = this.state.dogs.find(x => x.id === walkObject.dogId);
    const employee = this.state.employees.find(x => x.id === walkObject.employeeId);
    const createWalk = {
      dogId: dog.id,
      employeeId: employee.id,
      date: walkObject.date,
    };
    walksData.addWalk(createWalk)
      .then(() => {
        walksData.getWalks()
          .then(allWalks => this.setState({ walks: allWalks }));
      }).catch(error => console.error('did not add walk', error));
  }

  render() {
    const { dogs, employees, walks } = this.state;
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
      <Walks walks = {walks} deleteWalk = {this.deleteWalk}/>
      </div>
      <div className = "col">
      <WalkForm
        walks={walks}
        dogs={dogs}
        employees={employees}
        addWalk={this.addWalk}
        deleteWalk={this.deleteWalk}
        />
      </div>
      </div>
      </div>
    );
  }
}

export default Home;
