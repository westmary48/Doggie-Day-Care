import React from 'react';

import firebase from 'firebase/app';

import 'firebase/auth';

import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavBar/MyNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import fbConnection from '../helpers/connection';

fbConnection();

class App extends React.Component {
   state = {
     authed: false,
   }

   componentDidMount() {
     this.removeListener = firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         this.setState({ authed: true });
       } else {
         this.setState({ authed: false });
       }
     });
   }

   componentWillUnmount() {
     this.removeListener();
   }

   render() {
     const loadComponent = () => {
       if (this.state.authed) {
         return <Home />;
       }
       return <Auth />;
     };
     return (
    <div className = "App">
      <MyNavbar authed={this.state.authed} />
      {loadComponent()}
    </div>
     );
   }
}

export default App;
