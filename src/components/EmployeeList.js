import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }
  
  // life cycle callback when the component is about to render another set of props
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }
  
  renderRow(employee) {
    return <ListItem employee={ employee } />
  }
  
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }
  
  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={ this.dataSource }
        renderRow={ this.renderRow }
        />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // transform an object with properties equal to object =>
  // an array with property as key and object as value
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift: 'Monday', name:: 'Mike', id: 1jf43d }
  });
  return {
    employees
  };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);