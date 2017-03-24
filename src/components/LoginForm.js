import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={ (email) => this.props.emailChanged(email) }
            label="Email"
            placeholder="email@gmail.com"
            value={ this.props.email }
            />
        </CardSection>
        
        <CardSection>
          <Input
            secureTextEntry
            onChangeText={ (password) => this.props.passwordChanged(password) }
            label="Password"
            placeholder="password"
            value={ this.props.password }
            />
        </CardSection>
          
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    email: state.auth.email,
    password: state.auth.password
  })
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
