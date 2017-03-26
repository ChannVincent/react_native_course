import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import { Header } from './components/common';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBA_W9WgJQVuCupARsMfCsXnvyB8ufOcEg",
      authDomain: "test-a2ff6.firebaseapp.com",
      databaseURL: "https://test-a2ff6.firebaseio.com",
      storageBucket: "test-a2ff6.appspot.com",
      messagingSenderId: "825042305320"
    };
    // only initialize once or throw errors
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
        <Router />
      </Provider>
    );
  }
}

export default App;
