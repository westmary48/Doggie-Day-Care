import React from 'react';
import 'firebase/auth';

import './WalkForm.scss';


class WalkForm extends React.Component {
  state = {
    dogId: '',
    employeeId: '',
    date: '',
    time: '',
  };

  dogChange = (e) => {
    e.preventDefault();
    this.setState({ dogId: e.target.value });
  }

  employeeChange = (e) => {
    e.preventDefault();
    this.setState({ employeeId: e.target.value });
  }

  dateChange = (e) => {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addWalk(this.state);
    this.setState({ date: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <select value={this.state.employeeValue} onChange={this.employeeChange}>
          <option value="Employee">Employee</option>
          {this.props.employees.map(employee => (
            <option key={employee.id} value={employee.id}>{employee.name}</option>
          ))}
        </select>
        <select value={this.state.dogValue} onChange={this.dogChange}>
          <option value="Dog">Dog</option>
          {this.props.dogs.map(dog => (
            <option key={dog.id} value={dog.id}>{dog.name}</option>
          ))}
        </select>
        <br/>
        <label>
          Date of walk: {' '}
          <input type="text" placeholder="Enter date" value={this.state.date} onChange={this.dateChange}></input>
        </label>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default WalkForm;
