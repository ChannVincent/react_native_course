import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      // prend toutes les objects et les ajoute dans un array avec une key == id et une value égale à l'objet associé à cette clé
      // return { ...state, [id]: action.payload };
      return action.payload;
      
    default:
      return state;
  }
}