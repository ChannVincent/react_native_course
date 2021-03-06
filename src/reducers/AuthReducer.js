import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_ATTEMPT } from '../actions/types';

const INITIAL_STATE = { 
  email: '123@gmail.com',
  password: '123456',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
      
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
      
    case LOGIN_USER_ATTEMPT:
      return { ...state, error: '', loading: true }
      
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
      
    case LOGIN_USER_FAIL:
      return { ...state, user: action.payload, error: 'Authentication failed.', password: '', loading: false }
      
    default:
      return state;
  }
}