import React from 'react';

import Dog from '../../Dog/Dog';
import dogData from '../../helpers/data/dogsData';

class DogPen extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('could not get dogs', err));
  }

  render() {
    const dogComponents = this.state.dogs.map(dog => (
      <Dog key = {dog.id} dog = {dog}/>
    ));
    return (
      <div className = "DogPen">
      <h2>DogPen</h2>
      <ul className = "dogs">
        {dogComponents}
      </ul>
      </div>
    );
  }
}

export default DogPen;
