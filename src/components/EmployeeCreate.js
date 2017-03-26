import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    const { name, phone, employeeUpdate } = this.props;
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Name"
              placeHolder="Jane" 
              onChangeText={ (name) => { employeeUpdate({ prop: 'name', value: name }) } }
              value={ name }
              />
          </CardSection>
        
          <CardSection>
            <Input 
              label="Phone"
              placeHolder="555-555-5555"
              onChangeText={ (phone) => { employeeUpdate({ prop: 'phone', value: phone }) } }
              value={ phone }
              />
          </CardSection>
        
          <CardSection>
          </CardSection>
        
          <CardSection>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.employeeForm);
  const { name, phone } = state.employeeForm;
  return {
    name,
    phone
  }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);