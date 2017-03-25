import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  
  onButtonPress() {
    const {email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  
  renderButton() {
    if (this.props.loading) {
      return(
        <Spinner />
      )
    }
    else {
      return(
        <Button
          onPress={ this.onButtonPress.bind(this) }>
          Login
        </Button>
      )
    }
  }
  
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
        
        <Text style={ styles.errorTextStyle }>
          { this.props.error }
        </Text>
        
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { email, password, error, loading } = state.auth;
  return ({
    email,
    password,
    error,
    loading
  })
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
