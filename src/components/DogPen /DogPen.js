import React from 'react';

import './DogPen.scss';

class DogPen extends React.Component {
  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(dog => (
      <h2>{dog.name}</h2>
    ));
    return (
      <div>
        { makeDogs }
      </div>
    );
  }
}

export default DogPen;
