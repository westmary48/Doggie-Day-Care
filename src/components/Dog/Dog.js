import React from 'react';

import './Dog.scss';

import dogs from '../../App/dogs';

class Dog extends React.Component {
  render() {
    const { dog } = this.props;
    return (
      <div className = " Dog col-3">
        <div className = "card">
        <img className = "card-img-top" src = {dog.imgUrl} />
        <div className = "card-body">
          <h5 className = "card-title">{ dog.name}</h5>
          <p className = "card-text"> {dog.color}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Dog;
