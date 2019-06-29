import React from 'react';

import Employee from '../Employee/Employee';

import employeesData from '../../helpers/data/employeesData';
import './StaffRoom.scss';

class StaffRoom extends React.Component {
  state = {
    employees: [],
  }

  componentDidMount() {
    employeesData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('could not get employees', err));
  }

  render() {
    const employeeComponents = this.state.employees.map(employee => (
      <Employee key = {employee.id} employee = {employee}/>
    ));

    return (
      <div className = "StaffRoom d-flex flex-wrap">
        <h1>StaffRoom</h1>
        { employeeComponents }
      </div>
    );
  }
}

export default StaffRoom;
