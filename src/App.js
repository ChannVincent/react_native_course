import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from './components/common'
import AlbumList from './components/AlbumList'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBA_W9WgJQVuCupARsMfCsXnvyB8ufOcEg",
      authDomain: "test-a2ff6.firebaseapp.com",
      databaseURL: "https://test-a2ff6.firebaseio.com",
      storageBucket: "test-a2ff6.appspot.com",
      messagingSenderId: "825042305320"
    });
  }
  
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText='Auth'/>
        <LoginForm/>
      </View>
    )
  }
  
}

export default App;