import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  render() {
    console.log(this.props.employee);
    const { name, phone, employeeUpdate, shift } = this.props;
    return (
      <Card>
        <EmployeeForm { ...this.props } />
        
        <CardSection>
          <Button
            onPress={ () => { 
              const { name, phone, shift } = this.props;
              this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
            } }>
            Create
          </Button>
        </CardSection>
      </Card>
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);