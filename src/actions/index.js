import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';
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
  // return a function thanks to redux-thunk
  // then when the async task will finish, then() function will be called and dispatch the action
  return (dispatch) => {
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