import React from 'react';

import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

import './SingleWalk.scss';

class SingleWalk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    deleteWalk: PropTypes.func.isRequired,
  }

  deleteWalkEvent = (e) => {
    const { walk, deleteWalk } = this.props;
    e.preventDefault();
    deleteWalk(walk.id);
  }

  render() {
    const { walk } = this.props;
    return (
    <div className = "Walk  col-3">
      <div className = "card">
      <div className = "card-body">
        <h5 className = "card-text">{walk.dogId}</h5>
        <p className = "card-text">{walk.employeeId}</p>
        <h5 className = "card-text">{walk.date}</h5>
        <button className = "btn btn-danger" onClick= {this.deleteWalkEvent}>Delete</button>
      </div>
      </div>
    </div>
    );
  }
}

export default SingleWalk;
