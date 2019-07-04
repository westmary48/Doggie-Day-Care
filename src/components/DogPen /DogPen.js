import React from 'react';
import PropTypes from 'prop-types';

import Dog from '../../Dog/Dog';

import dogShape from '../../helpers/propz/dogShape';

class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const dogComponents = this.props.dogs.map(dog => (
      <Dog key = {dog.id} dog = {dog}/>
    ));
    return (
      <div className = "DogPen d-flex flex-wrap">
      <h2>DogPen</h2>
        {dogComponents}
      </div>
    );
  }
}

export default DogPen;
