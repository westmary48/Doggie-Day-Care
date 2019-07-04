import React from 'react';

import PropTypes from 'prop-types';

import SingleWalk from '../SingleWalk/SingleWalk';

import walkShape from '../../helpers/propz/walkShape';

import './Walks.scss';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    deleteWalk: PropTypes.func.isRequired,
  }

  render() {
    const walkComponents = this.props.walks.map(walk => (
      <SingleWalk key = {walk.id} walk = {walk} deleteWalk = {this.props.deleteWalk}/>
    ));
    return (
      <div className = "Walks d-flex flex-wrap">
      <h1>Walks</h1>
      { walkComponents }
      </div>
    );
  }
}

export default Walks;
