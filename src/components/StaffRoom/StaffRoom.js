import React from 'react';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  render() {
    const { employees } = this.props;
    const makeEmployees = employees.map(employee => (
      <h2>{employee.name}</h2>
    ));

    return (
      <div>
        { makeEmployees }
      </div>
    );
  }
}

export default StaffRoom;
