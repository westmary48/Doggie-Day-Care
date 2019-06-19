import React from 'react';

import './Employee.scss';

class Employee extends React.Component {
  render() {
    const { employee } = this.props;
    return (
    <div className = "Employee  col-3">
      <div className = "card">
      <img className = "card-img-top" src = {employee.imgUrl} />
      <div className = "card-body">
        <h5 className = "card-title">{employee.name}</h5>
        <p className = "card-text">{employee.position}</p>
      </div>
      </div>
    </div>
    );
  }
}

export default Employee;
