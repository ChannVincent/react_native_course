import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import { Platform } from 'react-native'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
    return (
      <Router sceneStyle={ styles.sceneStyle }>
        <Scene key='auth'>
          <Scene 
            key='login'
            component={ LoginForm }
            title='Please Login'
            />
        </Scene>
        <Scene key='main' >
          <Scene 
            key='employeeList'
            component={ EmployeeList }
            title='Employees'
            onRight={ () => { Actions.employeeCreate() } }
            rightTitle='Add'
            />
          <Scene
            key='employeeCreate'
            title='Create employee'
            component={ EmployeeCreate }
            />
        </Scene>
      </Router>
    )
}

const styles = {
  sceneStyle: {
    paddingTop: (Platform.OS === 'ios') ? 65 : 55
  }
}

export default RouterComponent;