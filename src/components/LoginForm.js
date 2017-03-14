import React, { Component } from 'react'
import { Text } from 'react-native'
import { Spinner, Card, CardSection, Button, Input } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
  state = { 
    email: '',
    password: '',
    error: '',
    loading: false
  }
  
  onButtonPress() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
    });
  }
  
  onLoginSuccess() {
    this.setState({  
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }
  
  onLoginFail() {
    this.setState({ error: 'Authentication failed', loading: false });
  }
  
  renderButton() {
    if (this.state.loading) {
      return <Spinner size='large'/>;      
    } 
    return (
      <Button onPress={ this.onButtonPress.bind(this) }>
        Login
      </Button>
    )
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder='user@gmail.com'
            label='Email'
            value={ this.state.email }
            onChangeText={ email => this.setState({ email }) }
            />
        </CardSection>
        
        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={ this.state.password }
            onChangeText={ password => this.setState({ password }) }
            />
        </CardSection>
        
        <Text style={ styles.errorTextStyle }>
          { this.state.error }
        </Text>
        
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;