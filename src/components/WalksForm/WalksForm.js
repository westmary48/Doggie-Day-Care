import React from 'react';

import './WalksForm.scss';

class WalksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <div className="WalksForm">
        <form>
        <label>
          Employees:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Pam">Pam</option>
            <option value="Dwight">Dwight</option>
            <option value="Jim">Jim</option>
            <option value="Micheal">Michael</option>
            <option value="Angela">Angela</option>
          </select>
        </label>
        <label>
          Dogs:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Cooper">Cooper</option>
            <option value="Bentley">Bentley</option>
            <option value="Missy">Missy</option>
            <option value="Sam">Sam</option>
            <option value="Tucker">Tucker</option>
          </select>
        </label>
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
