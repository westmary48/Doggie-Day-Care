import React from 'react';

import PropTypes from 'prop-types';

import Dog from '../Dog/Dog';

import dogShape from '../../helpers/propz/dogShape';

import './DogPen.scss';

class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(dog => (
      <Dog key = {dog.id} dog = {dog} />
    ));
    return (
      <div className = "DogPen d-flex flex-wrap">
        { makeDogs }
      </div>
    );
  }
}

export default DogPen;
