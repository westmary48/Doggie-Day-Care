import React from 'react';

import './WalksForm.scss';

class WalksForm extends React.Component {
  render() {
    return (
      <div className="WalksForm">
        <form>
          <h1>Add New Walk</h1>
          <select class="form-control">
            <option>Employees</option>
          </select>
          <select class="form-control">
            <option>Dogs</option>
          </select>
          <label>
            Date:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default WalksForm;
