import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/index.actions';

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user };
    case LOGIN_USER_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};