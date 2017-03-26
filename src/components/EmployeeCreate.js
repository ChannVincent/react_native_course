import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    const { name, phone, employeeUpdate, shift } = this.props;
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
            <Picker
              style={{ flex: 1 }}
              selectedValue={ shift }
              onValueChange={ day => { employeeUpdate({ prop: 'shift', value: day }) } }
              >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>
        
          <CardSection>
            <Button>
              Create
            </Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.employeeForm);
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  }
}

const styles = {
  
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);