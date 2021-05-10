import React, { Component } from 'react';
import firebase from './Firebase';
import Inicio from './Inicio';
import Login from './Login';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    console.log(firebase.auth().currentUser)
    return (
      <div>
        {this.state.user
         ? (<Inicio />
          ) : (
            <div className="App">
              <Login />
            </div>
          )}
      </div>
    );
  }
}

export default App;
