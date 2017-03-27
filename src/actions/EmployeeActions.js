import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';
import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  // = "/users/123456/employees"
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
  
  return {
    type: EMPLOYEE_CREATE,
    payload: { name, phone, shift }
  }
}