import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    console.log(this.props.employee);
    const { name, phone, employeeUpdate, shift } = this.props;
    return (
      <View>
        <Card>
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
        
          <CardSection>
            <Button
              onPress={ () => { 
                const { name, phone, shift } = this.props;
                this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
              } }
              >
              Create
            </Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  }
}

const styles = {
  
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);