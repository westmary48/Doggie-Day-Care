import React from 'react';

import PropTypes from 'prop-types';

import Employee from '../Employee/Employee';

import employeeShape from '../../helpers/propz/employeeShape';
import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const employeeComponents = this.props.employees.map(employee => (
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
