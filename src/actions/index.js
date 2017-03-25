import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_ATTEMPT } from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  
  // redux-thunk async dispatch function
  return (dispatch) => {
    // dispatch login attempt
    dispatch({
      type: LOGIN_USER_ATTEMPT
    })
  
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      // dispatch an action when the task is complete
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
      })
    })
    .catch((error) => {
      console.log(error);
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          // dispatch an action when the task is complete
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user
          })
        })
        .catch((error) => {
          console.log(error);
          // dispatch an action when the task is complete
          dispatch({
            type: LOGIN_USER_FAIL,
            payload: null
          })
        })
    })
  };
}