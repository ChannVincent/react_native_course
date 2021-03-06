import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props;
    return (
      <View>
        <CardSection>
            <Input
              label="Name"
              placeholder="Jane" 
              onChangeText={ (name) => { employeeUpdate({ prop: 'name', value: name }) } }
              value={ name }
              />
          </CardSection>
        
          <CardSection>
            <Input 
              label="Phone"
              placeholder="555-555-5555"
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
      </View>
    )
  }
}

const styles = {
  
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);