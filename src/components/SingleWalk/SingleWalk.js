import React from 'react';

import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

import './SingleWalk.scss';

class SingleWalk extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
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
      </div>
      </div>
    </div>
    );
  }
}

export default SingleWalk;
