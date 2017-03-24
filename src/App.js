import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBA_W9WgJQVuCupARsMfCsXnvyB8ufOcEg",
      authDomain: "test-a2ff6.firebaseapp.com",
      databaseURL: "https://test-a2ff6.firebaseio.com",
      storageBucket: "test-a2ff6.appspot.com",
      messagingSenderId: "825042305320"
    };
    // only initialize once
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <View>
          <Text>Hello React</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
