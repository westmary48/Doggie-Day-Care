import React from 'react';

import DogPen from '../DogPen /DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalksForm from '../WalksForm/WalksForm';

import './Home.scss';
import Walks from '../Walks/Walks';

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
      <div className = "row">
      <div className = "col">
      <WalksForm />
      </div>
      <div className = "col">
      <Walks />
      </div>
      </div>
    </div>
    );
  }
}

export default Home;
