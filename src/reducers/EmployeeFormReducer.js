import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default ManageEmployeeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      // [action.payload.prop] is NOT an array => it is called KEY INTERPOLATION (ES6) => key takes the value of action.payload.prop
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
}