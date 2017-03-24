import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { 
  email: '',
  password: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // create a new object with all properties of state and set value of email equal to action.payload
      return { ...state, email: action.payload }; 
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    default:
      return state;
  }
}