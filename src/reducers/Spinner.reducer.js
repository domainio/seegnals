import {
  GLOBAL_LOADING_START,
  GLOBAL_LOADING_END,
} from '../actions/index.actions';

const INITIAL_STATE = { globalLoading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GLOBAL_LOADING_START:
      return { ...state, globalLoading: true };
    case GLOBAL_LOADING_END:
      return { ...state, globalLoading: false };
    default:
      return state;
  }
};