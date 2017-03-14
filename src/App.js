import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Button, Spinner } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {

  state = {
    loggedIn: null
  }
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBA_W9WgJQVuCupARsMfCsXnvyB8ufOcEg",
      authDomain: "test-a2ff6.firebaseapp.com",
      databaseURL: "https://test-a2ff6.firebaseio.com",
      storageBucket: "test-a2ff6.appspot.com",
      messagingSenderId: "825042305320"
    });
    
    // callback when the user signed in or signed out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true
        })
      }
      else {
        this.setState({
          loggedIn: false
        })
      }
    });
  }
  
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={ styles.contentStyle }>
            <Button>
              Logged In
            </Button>
          </View>
        );
        break;
        
      case false:
        return (<LoginForm />);
        break;
        
      case null:
        return (
          <View style={ styles.contentSpinnerStyle }>
            <Spinner size='large' />
          </View>
        );
        break;
    }
  }
  
  render() {
    return (
      <View>
        <Header headerText='Auth'/>
        { this.renderContent() }
      </View>
    )
  }
}

const styles = {
  contentStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  contentSpinnerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
export default App;