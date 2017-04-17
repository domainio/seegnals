import { CREATE_EVENT } from '../actions/index.actions';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return INITIAL_STATE;
    default:
      return state;
  }
};