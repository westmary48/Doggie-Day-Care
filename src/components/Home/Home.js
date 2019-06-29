import React from 'react';

import DogPen from '../DogPen /DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
    <div className="Home">
      <div className = "row">
        <div className = "col">
      <DogPen />
      </div>
      <div className = "col">
      <StaffRoom />
      </div>
    </div>
    </div>
    );
  }
}

export default Home;
