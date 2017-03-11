import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { Card, CardSection, Button } from './common';

class LoginForm extends Component {
  
  state = { text: '' }
  
  render() {
    return (
      <Card>
        
        <CardSection>
          <TextInput 
            value={ this.state.text }
            onChangeText={text => { 
                this.setState({ text })
                console.log(text);
              }
            }
            style={{height: 50, width: 200}}/>
        </CardSection>
        
        <CardSection>
          <TextInput/>
        </CardSection>
        
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
        
      </Card>
    )
  }
}

export default LoginForm;