import React from 'react';

import dogs from './dogs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
   state = {
     dogs: [],
   }

   componentDidMount() {
     this.setState({ dogs });
   }

   render() {
     return (
    <div className = "App">
      <div>Doggie Daycare</div>
    </div>
     );
   }
}
export default App;
